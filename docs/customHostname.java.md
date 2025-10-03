# `customHostname` Submodule <a name="`customHostname` Submodule" id="@cdktf/provider-cloudflare.customHostname"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomHostname <a name="CustomHostname" id="@cdktf/provider-cloudflare.customHostname.CustomHostname"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname cloudflare_custom_hostname}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostname;

CustomHostname.Builder.create(Construct scope, java.lang.String id)
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
    .hostname(java.lang.String)
    .ssl(CustomHostnameSsl)
    .zoneId(java.lang.String)
//  .customMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .customOriginServer(java.lang.String)
//  .customOriginSni(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | The custom hostname that will point to your hostname via CNAME. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a></code> | SSL properties used when creating the custom hostname. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.customMetadata">customMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unique key/value metadata for this hostname. These are per-hostname (customer) settings. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.customOriginServer">customOriginServer</a></code> | <code>java.lang.String</code> | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.customOriginSni">customOriginSni</a></code> | <code>java.lang.String</code> | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

The custom hostname that will point to your hostname via CNAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#hostname CustomHostname#hostname}

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.ssl"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>

SSL properties used when creating the custom hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#ssl CustomHostname#ssl}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#zone_id CustomHostname#zone_id}

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.customMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unique key/value metadata for this hostname. These are per-hostname (customer) settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#custom_metadata CustomHostname#custom_metadata}

---

##### `customOriginServer`<sup>Optional</sup> <a name="customOriginServer" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.customOriginServer"></a>

- *Type:* java.lang.String

a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#custom_origin_server CustomHostname#custom_origin_server}

---

##### `customOriginSni`<sup>Optional</sup> <a name="customOriginSni" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.customOriginSni"></a>

- *Type:* java.lang.String

A hostname that will be sent to your custom origin server as SNI for TLS handshake.

This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which will cause the host header in the request to be used as SNI. Not configurable with default/fallback origin server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#custom_origin_sni CustomHostname#custom_origin_sni}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl">putSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomMetadata">resetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginServer">resetCustomOriginServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginSni">resetCustomOriginSni</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSsl` <a name="putSsl" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl"></a>

```java
public void putSsl(CustomHostnameSsl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>

---

##### `resetCustomMetadata` <a name="resetCustomMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomMetadata"></a>

```java
public void resetCustomMetadata()
```

##### `resetCustomOriginServer` <a name="resetCustomOriginServer" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginServer"></a>

```java
public void resetCustomOriginServer()
```

##### `resetCustomOriginSni` <a name="resetCustomOriginSni" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginSni"></a>

```java
public void resetCustomOriginSni()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CustomHostname resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostname;

CustomHostname.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostname;

CustomHostname.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostname;

CustomHostname.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostname;

CustomHostname.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CustomHostname.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CustomHostname resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CustomHostname to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CustomHostname that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CustomHostname to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerification">ownershipVerification</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference">CustomHostnameOwnershipVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerificationHttp">ownershipVerificationHttp</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference">CustomHostnameOwnershipVerificationHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference">CustomHostnameSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.verificationErrors">verificationErrors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadataInput">customMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServerInput">customOriginServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSniInput">customOriginSniInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.sslInput">sslInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadata">customMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServer">customOriginServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSni">customOriginSni</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ownershipVerification`<sup>Required</sup> <a name="ownershipVerification" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerification"></a>

```java
public CustomHostnameOwnershipVerificationOutputReference getOwnershipVerification();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference">CustomHostnameOwnershipVerificationOutputReference</a>

---

##### `ownershipVerificationHttp`<sup>Required</sup> <a name="ownershipVerificationHttp" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerificationHttp"></a>

```java
public CustomHostnameOwnershipVerificationHttpOutputReference getOwnershipVerificationHttp();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference">CustomHostnameOwnershipVerificationHttpOutputReference</a>

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ssl"></a>

```java
public CustomHostnameSslOutputReference getSsl();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference">CustomHostnameSslOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `verificationErrors`<sup>Required</sup> <a name="verificationErrors" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.verificationErrors"></a>

```java
public java.util.List<java.lang.String> getVerificationErrors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customMetadataInput`<sup>Optional</sup> <a name="customMetadataInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `customOriginServerInput`<sup>Optional</sup> <a name="customOriginServerInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServerInput"></a>

```java
public java.lang.String getCustomOriginServerInput();
```

- *Type:* java.lang.String

---

##### `customOriginSniInput`<sup>Optional</sup> <a name="customOriginSniInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSniInput"></a>

```java
public java.lang.String getCustomOriginSniInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.sslInput"></a>

```java
public java.lang.Object getSslInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `customOriginServer`<sup>Required</sup> <a name="customOriginServer" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServer"></a>

```java
public java.lang.String getCustomOriginServer();
```

- *Type:* java.lang.String

---

##### `customOriginSni`<sup>Required</sup> <a name="customOriginSni" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSni"></a>

```java
public java.lang.String getCustomOriginSni();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CustomHostnameConfig <a name="CustomHostnameConfig" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostnameConfig;

CustomHostnameConfig.builder()
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
    .hostname(java.lang.String)
    .ssl(CustomHostnameSsl)
    .zoneId(java.lang.String)
//  .customMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .customOriginServer(java.lang.String)
//  .customOriginSni(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | The custom hostname that will point to your hostname via CNAME. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a></code> | SSL properties used when creating the custom hostname. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customMetadata">customMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unique key/value metadata for this hostname. These are per-hostname (customer) settings. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginServer">customOriginServer</a></code> | <code>java.lang.String</code> | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginSni">customOriginSni</a></code> | <code>java.lang.String</code> | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

The custom hostname that will point to your hostname via CNAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#hostname CustomHostname#hostname}

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.ssl"></a>

```java
public CustomHostnameSsl getSsl();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>

SSL properties used when creating the custom hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#ssl CustomHostname#ssl}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#zone_id CustomHostname#zone_id}

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unique key/value metadata for this hostname. These are per-hostname (customer) settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#custom_metadata CustomHostname#custom_metadata}

---

##### `customOriginServer`<sup>Optional</sup> <a name="customOriginServer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginServer"></a>

```java
public java.lang.String getCustomOriginServer();
```

- *Type:* java.lang.String

a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#custom_origin_server CustomHostname#custom_origin_server}

---

##### `customOriginSni`<sup>Optional</sup> <a name="customOriginSni" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginSni"></a>

```java
public java.lang.String getCustomOriginSni();
```

- *Type:* java.lang.String

A hostname that will be sent to your custom origin server as SNI for TLS handshake.

This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which will cause the host header in the request to be used as SNI. Not configurable with default/fallback origin server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#custom_origin_sni CustomHostname#custom_origin_sni}

---

### CustomHostnameOwnershipVerification <a name="CustomHostnameOwnershipVerification" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostnameOwnershipVerification;

CustomHostnameOwnershipVerification.builder()
    .build();
```


### CustomHostnameOwnershipVerificationHttp <a name="CustomHostnameOwnershipVerificationHttp" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostnameOwnershipVerificationHttp;

CustomHostnameOwnershipVerificationHttp.builder()
    .build();
```


### CustomHostnameSsl <a name="CustomHostnameSsl" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostnameSsl;

CustomHostnameSsl.builder()
//  .bundleMethod(java.lang.String)
//  .certificateAuthority(java.lang.String)
//  .cloudflareBranding(java.lang.Boolean)
//  .cloudflareBranding(IResolvable)
//  .customCertBundle(IResolvable)
//  .customCertBundle(java.util.List<CustomHostnameSslCustomCertBundle>)
//  .customCertificate(java.lang.String)
//  .customKey(java.lang.String)
//  .method(java.lang.String)
//  .settings(CustomHostnameSslSettings)
//  .type(java.lang.String)
//  .wildcard(java.lang.Boolean)
//  .wildcard(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.bundleMethod">bundleMethod</a></code> | <code>java.lang.String</code> | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.certificateAuthority">certificateAuthority</a></code> | <code>java.lang.String</code> | The Certificate Authority that will issue the certificate Available values: "digicert", "google", "lets_encrypt", "ssl_com". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.cloudflareBranding">cloudflareBranding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to add Cloudflare Branding for the order. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertBundle">customCertBundle</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>></code> | Array of custom certificate and key pairs (1 or 2 pairs allowed). |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertificate">customCertificate</a></code> | <code>java.lang.String</code> | If a custom uploaded certificate is used. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customKey">customKey</a></code> | <code>java.lang.String</code> | The key for a custom uploaded certificate. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.method">method</a></code> | <code>java.lang.String</code> | Domain control validation (DCV) method used for this hostname. Available values: "http", "txt", "email". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a></code> | SSL specific settings. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.type">type</a></code> | <code>java.lang.String</code> | Level of validation to be used for this hostname. Domain validation (dv) must be used. Available values: "dv". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.wildcard">wildcard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the certificate covers a wildcard. |

---

##### `bundleMethod`<sup>Optional</sup> <a name="bundleMethod" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.bundleMethod"></a>

```java
public java.lang.String getBundleMethod();
```

- *Type:* java.lang.String

A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores.

An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.
Available values: "ubiquitous", "optimal", "force".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#bundle_method CustomHostname#bundle_method}

---

##### `certificateAuthority`<sup>Optional</sup> <a name="certificateAuthority" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.certificateAuthority"></a>

```java
public java.lang.String getCertificateAuthority();
```

- *Type:* java.lang.String

The Certificate Authority that will issue the certificate Available values: "digicert", "google", "lets_encrypt", "ssl_com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#certificate_authority CustomHostname#certificate_authority}

---

##### `cloudflareBranding`<sup>Optional</sup> <a name="cloudflareBranding" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.cloudflareBranding"></a>

```java
public java.lang.Object getCloudflareBranding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to add Cloudflare Branding for the order.

This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#cloudflare_branding CustomHostname#cloudflare_branding}

---

##### `customCertBundle`<sup>Optional</sup> <a name="customCertBundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertBundle"></a>

```java
public java.lang.Object getCustomCertBundle();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>>

Array of custom certificate and key pairs (1 or 2 pairs allowed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#custom_cert_bundle CustomHostname#custom_cert_bundle}

---

##### `customCertificate`<sup>Optional</sup> <a name="customCertificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertificate"></a>

```java
public java.lang.String getCustomCertificate();
```

- *Type:* java.lang.String

If a custom uploaded certificate is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#custom_certificate CustomHostname#custom_certificate}

---

##### `customKey`<sup>Optional</sup> <a name="customKey" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customKey"></a>

```java
public java.lang.String getCustomKey();
```

- *Type:* java.lang.String

The key for a custom uploaded certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#custom_key CustomHostname#custom_key}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Domain control validation (DCV) method used for this hostname. Available values: "http", "txt", "email".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#method CustomHostname#method}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.settings"></a>

```java
public CustomHostnameSslSettings getSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>

SSL specific settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#settings CustomHostname#settings}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Level of validation to be used for this hostname. Domain validation (dv) must be used. Available values: "dv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#type CustomHostname#type}

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.wildcard"></a>

```java
public java.lang.Object getWildcard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the certificate covers a wildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#wildcard CustomHostname#wildcard}

---

### CustomHostnameSslCustomCertBundle <a name="CustomHostnameSslCustomCertBundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostnameSslCustomCertBundle;

CustomHostnameSslCustomCertBundle.builder()
    .customCertificate(java.lang.String)
    .customKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customCertificate">customCertificate</a></code> | <code>java.lang.String</code> | If a custom uploaded certificate is used. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customKey">customKey</a></code> | <code>java.lang.String</code> | The key for a custom uploaded certificate. |

---

##### `customCertificate`<sup>Required</sup> <a name="customCertificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customCertificate"></a>

```java
public java.lang.String getCustomCertificate();
```

- *Type:* java.lang.String

If a custom uploaded certificate is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#custom_certificate CustomHostname#custom_certificate}

---

##### `customKey`<sup>Required</sup> <a name="customKey" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customKey"></a>

```java
public java.lang.String getCustomKey();
```

- *Type:* java.lang.String

The key for a custom uploaded certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#custom_key CustomHostname#custom_key}

---

### CustomHostnameSslSettings <a name="CustomHostnameSslSettings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostnameSslSettings;

CustomHostnameSslSettings.builder()
//  .ciphers(java.util.List<java.lang.String>)
//  .earlyHints(java.lang.String)
//  .http2(java.lang.String)
//  .minTlsVersion(java.lang.String)
//  .tls13(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.ciphers">ciphers</a></code> | <code>java.util.List<java.lang.String></code> | An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.earlyHints">earlyHints</a></code> | <code>java.lang.String</code> | Whether or not Early Hints is enabled. Available values: "on", "off". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.http2">http2</a></code> | <code>java.lang.String</code> | Whether or not HTTP2 is enabled. Available values: "on", "off". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | The minimum TLS version supported. Available values: "1.0", "1.1", "1.2", "1.3". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.tls13">tls13</a></code> | <code>java.lang.String</code> | Whether or not TLS 1.3 is enabled. Available values: "on", "off". |

---

##### `ciphers`<sup>Optional</sup> <a name="ciphers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.ciphers"></a>

```java
public java.util.List<java.lang.String> getCiphers();
```

- *Type:* java.util.List<java.lang.String>

An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#ciphers CustomHostname#ciphers}

---

##### `earlyHints`<sup>Optional</sup> <a name="earlyHints" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.earlyHints"></a>

```java
public java.lang.String getEarlyHints();
```

- *Type:* java.lang.String

Whether or not Early Hints is enabled. Available values: "on", "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#early_hints CustomHostname#early_hints}

---

##### `http2`<sup>Optional</sup> <a name="http2" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.http2"></a>

```java
public java.lang.String getHttp2();
```

- *Type:* java.lang.String

Whether or not HTTP2 is enabled. Available values: "on", "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#http2 CustomHostname#http2}

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.minTlsVersion"></a>

```java
public java.lang.String getMinTlsVersion();
```

- *Type:* java.lang.String

The minimum TLS version supported. Available values: "1.0", "1.1", "1.2", "1.3".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#min_tls_version CustomHostname#min_tls_version}

---

##### `tls13`<sup>Optional</sup> <a name="tls13" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.tls13"></a>

```java
public java.lang.String getTls13();
```

- *Type:* java.lang.String

Whether or not TLS 1.3 is enabled. Available values: "on", "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/custom_hostname#tls_1_3 CustomHostname#tls_1_3}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomHostnameOwnershipVerificationHttpOutputReference <a name="CustomHostnameOwnershipVerificationHttpOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostnameOwnershipVerificationHttpOutputReference;

new CustomHostnameOwnershipVerificationHttpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpBody">httpBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpUrl">httpUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp">CustomHostnameOwnershipVerificationHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpBody`<sup>Required</sup> <a name="httpBody" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpBody"></a>

```java
public java.lang.String getHttpBody();
```

- *Type:* java.lang.String

---

##### `httpUrl`<sup>Required</sup> <a name="httpUrl" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpUrl"></a>

```java
public java.lang.String getHttpUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.internalValue"></a>

```java
public CustomHostnameOwnershipVerificationHttp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp">CustomHostnameOwnershipVerificationHttp</a>

---


### CustomHostnameOwnershipVerificationOutputReference <a name="CustomHostnameOwnershipVerificationOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostnameOwnershipVerificationOutputReference;

new CustomHostnameOwnershipVerificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification">CustomHostnameOwnershipVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.internalValue"></a>

```java
public CustomHostnameOwnershipVerification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification">CustomHostnameOwnershipVerification</a>

---


### CustomHostnameSslCustomCertBundleList <a name="CustomHostnameSslCustomCertBundleList" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostnameSslCustomCertBundleList;

new CustomHostnameSslCustomCertBundleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.get"></a>

```java
public CustomHostnameSslCustomCertBundleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>>

---


### CustomHostnameSslCustomCertBundleOutputReference <a name="CustomHostnameSslCustomCertBundleOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostnameSslCustomCertBundleOutputReference;

new CustomHostnameSslCustomCertBundleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificateInput">customCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKeyInput">customKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificate">customCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKey">customKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customCertificateInput`<sup>Optional</sup> <a name="customCertificateInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificateInput"></a>

```java
public java.lang.String getCustomCertificateInput();
```

- *Type:* java.lang.String

---

##### `customKeyInput`<sup>Optional</sup> <a name="customKeyInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKeyInput"></a>

```java
public java.lang.String getCustomKeyInput();
```

- *Type:* java.lang.String

---

##### `customCertificate`<sup>Required</sup> <a name="customCertificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificate"></a>

```java
public java.lang.String getCustomCertificate();
```

- *Type:* java.lang.String

---

##### `customKey`<sup>Required</sup> <a name="customKey" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKey"></a>

```java
public java.lang.String getCustomKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>

---


### CustomHostnameSslOutputReference <a name="CustomHostnameSslOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostnameSslOutputReference;

new CustomHostnameSslOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putCustomCertBundle">putCustomCertBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetBundleMethod">resetBundleMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCertificateAuthority">resetCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCloudflareBranding">resetCloudflareBranding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertBundle">resetCustomCertBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertificate">resetCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomKey">resetCustomKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetWildcard">resetWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomCertBundle` <a name="putCustomCertBundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putCustomCertBundle"></a>

```java
public void putCustomCertBundle(IResolvable OR java.util.List<CustomHostnameSslCustomCertBundle> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putCustomCertBundle.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>>

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings"></a>

```java
public void putSettings(CustomHostnameSslSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>

---

##### `resetBundleMethod` <a name="resetBundleMethod" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetBundleMethod"></a>

```java
public void resetBundleMethod()
```

##### `resetCertificateAuthority` <a name="resetCertificateAuthority" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCertificateAuthority"></a>

```java
public void resetCertificateAuthority()
```

##### `resetCloudflareBranding` <a name="resetCloudflareBranding" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCloudflareBranding"></a>

```java
public void resetCloudflareBranding()
```

##### `resetCustomCertBundle` <a name="resetCustomCertBundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertBundle"></a>

```java
public void resetCustomCertBundle()
```

##### `resetCustomCertificate` <a name="resetCustomCertificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertificate"></a>

```java
public void resetCustomCertificate()
```

##### `resetCustomKey` <a name="resetCustomKey" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomKey"></a>

```java
public void resetCustomKey()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetSettings"></a>

```java
public void resetSettings()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetWildcard` <a name="resetWildcard" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetWildcard"></a>

```java
public void resetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundle">customCertBundle</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList">CustomHostnameSslCustomCertBundleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference">CustomHostnameSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethodInput">bundleMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthorityInput">certificateAuthorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBrandingInput">cloudflareBrandingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundleInput">customCertBundleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificateInput">customCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKeyInput">customKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settingsInput">settingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcardInput">wildcardInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethod">bundleMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthority">certificateAuthority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBranding">cloudflareBranding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificate">customCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKey">customKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcard">wildcard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customCertBundle`<sup>Required</sup> <a name="customCertBundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundle"></a>

```java
public CustomHostnameSslCustomCertBundleList getCustomCertBundle();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList">CustomHostnameSslCustomCertBundleList</a>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settings"></a>

```java
public CustomHostnameSslSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference">CustomHostnameSslSettingsOutputReference</a>

---

##### `bundleMethodInput`<sup>Optional</sup> <a name="bundleMethodInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethodInput"></a>

```java
public java.lang.String getBundleMethodInput();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityInput`<sup>Optional</sup> <a name="certificateAuthorityInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthorityInput"></a>

```java
public java.lang.String getCertificateAuthorityInput();
```

- *Type:* java.lang.String

---

##### `cloudflareBrandingInput`<sup>Optional</sup> <a name="cloudflareBrandingInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBrandingInput"></a>

```java
public java.lang.Object getCloudflareBrandingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customCertBundleInput`<sup>Optional</sup> <a name="customCertBundleInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundleInput"></a>

```java
public java.lang.Object getCustomCertBundleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle">CustomHostnameSslCustomCertBundle</a>>

---

##### `customCertificateInput`<sup>Optional</sup> <a name="customCertificateInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificateInput"></a>

```java
public java.lang.String getCustomCertificateInput();
```

- *Type:* java.lang.String

---

##### `customKeyInput`<sup>Optional</sup> <a name="customKeyInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKeyInput"></a>

```java
public java.lang.String getCustomKeyInput();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settingsInput"></a>

```java
public java.lang.Object getSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `wildcardInput`<sup>Optional</sup> <a name="wildcardInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcardInput"></a>

```java
public java.lang.Object getWildcardInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bundleMethod`<sup>Required</sup> <a name="bundleMethod" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethod"></a>

```java
public java.lang.String getBundleMethod();
```

- *Type:* java.lang.String

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthority"></a>

```java
public java.lang.String getCertificateAuthority();
```

- *Type:* java.lang.String

---

##### `cloudflareBranding`<sup>Required</sup> <a name="cloudflareBranding" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBranding"></a>

```java
public java.lang.Object getCloudflareBranding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customCertificate`<sup>Required</sup> <a name="customCertificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificate"></a>

```java
public java.lang.String getCustomCertificate();
```

- *Type:* java.lang.String

---

##### `customKey`<sup>Required</sup> <a name="customKey" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKey"></a>

```java
public java.lang.String getCustomKey();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcard"></a>

```java
public java.lang.Object getWildcard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>

---


### CustomHostnameSslSettingsOutputReference <a name="CustomHostnameSslSettingsOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname.CustomHostnameSslSettingsOutputReference;

new CustomHostnameSslSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetCiphers">resetCiphers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetEarlyHints">resetEarlyHints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetHttp2">resetHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetTls13">resetTls13</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCiphers` <a name="resetCiphers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetCiphers"></a>

```java
public void resetCiphers()
```

##### `resetEarlyHints` <a name="resetEarlyHints" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetEarlyHints"></a>

```java
public void resetEarlyHints()
```

##### `resetHttp2` <a name="resetHttp2" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetHttp2"></a>

```java
public void resetHttp2()
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetMinTlsVersion"></a>

```java
public void resetMinTlsVersion()
```

##### `resetTls13` <a name="resetTls13" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetTls13"></a>

```java
public void resetTls13()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphersInput">ciphersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHintsInput">earlyHintsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2Input">http2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13Input">tls13Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphers">ciphers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHints">earlyHints</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2">http2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13">tls13</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ciphersInput`<sup>Optional</sup> <a name="ciphersInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphersInput"></a>

```java
public java.util.List<java.lang.String> getCiphersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `earlyHintsInput`<sup>Optional</sup> <a name="earlyHintsInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHintsInput"></a>

```java
public java.lang.String getEarlyHintsInput();
```

- *Type:* java.lang.String

---

##### `http2Input`<sup>Optional</sup> <a name="http2Input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2Input"></a>

```java
public java.lang.String getHttp2Input();
```

- *Type:* java.lang.String

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersionInput"></a>

```java
public java.lang.String getMinTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `tls13Input`<sup>Optional</sup> <a name="tls13Input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13Input"></a>

```java
public java.lang.String getTls13Input();
```

- *Type:* java.lang.String

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphers"></a>

```java
public java.util.List<java.lang.String> getCiphers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `earlyHints`<sup>Required</sup> <a name="earlyHints" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHints"></a>

```java
public java.lang.String getEarlyHints();
```

- *Type:* java.lang.String

---

##### `http2`<sup>Required</sup> <a name="http2" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2"></a>

```java
public java.lang.String getHttp2();
```

- *Type:* java.lang.String

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersion"></a>

```java
public java.lang.String getMinTlsVersion();
```

- *Type:* java.lang.String

---

##### `tls13`<sup>Required</sup> <a name="tls13" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13"></a>

```java
public java.lang.String getTls13();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>

---



