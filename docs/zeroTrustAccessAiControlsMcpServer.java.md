# `zeroTrustAccessAiControlsMcpServer` Submodule <a name="`zeroTrustAccessAiControlsMcpServer` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessAiControlsMcpServer <a name="ZeroTrustAccessAiControlsMcpServer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_ai_controls_mcp_server.ZeroTrustAccessAiControlsMcpServer;

ZeroTrustAccessAiControlsMcpServer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .authType(java.lang.String)
    .hostname(java.lang.String)
    .id(java.lang.String)
    .name(java.lang.String)
//  .authCredentials(java.lang.String)
//  .description(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#account_id ZeroTrustAccessAiControlsMcpServer#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.authType">authType</a></code> | <code>java.lang.String</code> | Available values: "oauth", "bearer", "unauthenticated". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#hostname ZeroTrustAccessAiControlsMcpServer#hostname}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | server id. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.authCredentials">authCredentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_credentials ZeroTrustAccessAiControlsMcpServer#auth_credentials}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#account_id ZeroTrustAccessAiControlsMcpServer#account_id}.

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.authType"></a>

- *Type:* java.lang.String

Available values: "oauth", "bearer", "unauthenticated".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_type ZeroTrustAccessAiControlsMcpServer#auth_type}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#hostname ZeroTrustAccessAiControlsMcpServer#hostname}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

server id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#id ZeroTrustAccessAiControlsMcpServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}.

---

##### `authCredentials`<sup>Optional</sup> <a name="authCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.authCredentials"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_credentials ZeroTrustAccessAiControlsMcpServer#auth_credentials}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetAuthCredentials">resetAuthCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAuthCredentials` <a name="resetAuthCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetAuthCredentials"></a>

```java
public void resetAuthCredentials()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetDescription"></a>

```java
public void resetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_ai_controls_mcp_server.ZeroTrustAccessAiControlsMcpServer;

ZeroTrustAccessAiControlsMcpServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_ai_controls_mcp_server.ZeroTrustAccessAiControlsMcpServer;

ZeroTrustAccessAiControlsMcpServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_ai_controls_mcp_server.ZeroTrustAccessAiControlsMcpServer;

ZeroTrustAccessAiControlsMcpServer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_ai_controls_mcp_server.ZeroTrustAccessAiControlsMcpServer;

ZeroTrustAccessAiControlsMcpServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustAccessAiControlsMcpServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustAccessAiControlsMcpServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustAccessAiControlsMcpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessAiControlsMcpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.error">error</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.lastSynced">lastSynced</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.modifiedBy">modifiedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.prompts">prompts</a></code> | <code>com.hashicorp.cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.tools">tools</a></code> | <code>com.hashicorp.cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authCredentialsInput">authCredentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authCredentials">authCredentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.error"></a>

```java
public java.lang.String getError();
```

- *Type:* java.lang.String

---

##### `lastSynced`<sup>Required</sup> <a name="lastSynced" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.lastSynced"></a>

```java
public java.lang.String getLastSynced();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `modifiedBy`<sup>Required</sup> <a name="modifiedBy" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.modifiedBy"></a>

```java
public java.lang.String getModifiedBy();
```

- *Type:* java.lang.String

---

##### `prompts`<sup>Required</sup> <a name="prompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.prompts"></a>

```java
public StringMapList getPrompts();
```

- *Type:* com.hashicorp.cdktf.StringMapList

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.tools"></a>

```java
public StringMapList getTools();
```

- *Type:* com.hashicorp.cdktf.StringMapList

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `authCredentialsInput`<sup>Optional</sup> <a name="authCredentialsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authCredentialsInput"></a>

```java
public java.lang.String getAuthCredentialsInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `authCredentials`<sup>Required</sup> <a name="authCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authCredentials"></a>

```java
public java.lang.String getAuthCredentials();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessAiControlsMcpServerConfig <a name="ZeroTrustAccessAiControlsMcpServerConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_ai_controls_mcp_server.ZeroTrustAccessAiControlsMcpServerConfig;

ZeroTrustAccessAiControlsMcpServerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .authType(java.lang.String)
    .hostname(java.lang.String)
    .id(java.lang.String)
    .name(java.lang.String)
//  .authCredentials(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#account_id ZeroTrustAccessAiControlsMcpServer#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.authType">authType</a></code> | <code>java.lang.String</code> | Available values: "oauth", "bearer", "unauthenticated". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#hostname ZeroTrustAccessAiControlsMcpServer#hostname}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | server id. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.authCredentials">authCredentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_credentials ZeroTrustAccessAiControlsMcpServer#auth_credentials}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#account_id ZeroTrustAccessAiControlsMcpServer#account_id}.

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Available values: "oauth", "bearer", "unauthenticated".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_type ZeroTrustAccessAiControlsMcpServer#auth_type}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#hostname ZeroTrustAccessAiControlsMcpServer#hostname}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

server id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#id ZeroTrustAccessAiControlsMcpServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}.

---

##### `authCredentials`<sup>Optional</sup> <a name="authCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.authCredentials"></a>

```java
public java.lang.String getAuthCredentials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_credentials ZeroTrustAccessAiControlsMcpServer#auth_credentials}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}.

---



