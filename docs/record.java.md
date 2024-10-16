# `record` Submodule <a name="`record` Submodule" id="@cdktf/provider-cloudflare.record"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Record <a name="Record" id="@cdktf/provider-cloudflare.record.Record"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record cloudflare_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.record.Record.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.record.Record;

Record.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .type(java.lang.String)
    .zoneId(java.lang.String)
//  .allowOverwrite(java.lang.Boolean)
//  .allowOverwrite(IResolvable)
//  .comment(java.lang.String)
//  .content(java.lang.String)
//  .data(RecordData)
//  .id(java.lang.String)
//  .priority(java.lang.Number)
//  .proxied(java.lang.Boolean)
//  .proxied(IResolvable)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(RecordTimeouts)
//  .ttl(java.lang.Number)
//  .value(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the record. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.allowOverwrite">allowOverwrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow creation of this record in Terraform to overwrite an existing record, if any. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Comments or notes about the DNS record. This field has no effect on DNS responses. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | The content of the record. Must provide only one of `data`, `content`, `value`. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | data block. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#id Record#id}. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.proxied">proxied</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the record gets Cloudflare's origin protection. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Custom tags for the DNS record. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | The TTL of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | The value of the record. Must provide only one of `data`, `content`, `value`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the record. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#name Record#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the record.

Available values: `A`, `AAAA`, `CAA`, `CNAME`, `TXT`, `SRV`, `LOC`, `MX`, `NS`, `SPF`, `CERT`, `DNSKEY`, `DS`, `NAPTR`, `SMIMEA`, `SSHFP`, `TLSA`, `URI`, `PTR`, `HTTPS`, `SVCB`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#type Record#type}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#zone_id Record#zone_id}

---

##### `allowOverwrite`<sup>Optional</sup> <a name="allowOverwrite" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.allowOverwrite"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow creation of this record in Terraform to overwrite an existing record, if any.

This does not affect the ability to update the record in Terraform and does not prevent other resources within Terraform or manual changes outside Terraform from overwriting this record. **This configuration is not recommended for most environments**. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#allow_overwrite Record#allow_overwrite}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Comments or notes about the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#comment Record#comment}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.content"></a>

- *Type:* java.lang.String

The content of the record. Must provide only one of `data`, `content`, `value`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#content Record#content}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.data"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#data Record#data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#id Record#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

The priority of the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#priority Record#priority}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.proxied"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the record gets Cloudflare's origin protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#proxied Record#proxied}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Custom tags for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#tags Record#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#timeouts Record#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

The TTL of the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#ttl Record#ttl}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.value"></a>

- *Type:* java.lang.String

The value of the record. Must provide only one of `data`, `content`, `value`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#value Record#value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.putData">putData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetAllowOverwrite">resetAllowOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetProxied">resetProxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.record.Record.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.record.Record.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.record.Record.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.record.Record.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.record.Record.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.record.Record.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.record.Record.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.record.Record.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.record.Record.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.record.Record.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.record.Record.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.record.Record.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.record.Record.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.record.Record.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.Record.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.record.Record.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.record.Record.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.record.Record.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.record.Record.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.record.Record.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.record.Record.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putData` <a name="putData" id="@cdktf/provider-cloudflare.record.Record.putData"></a>

```java
public void putData(RecordData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-cloudflare.record.Record.putTimeouts"></a>

```java
public void putTimeouts(RecordTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>

---

##### `resetAllowOverwrite` <a name="resetAllowOverwrite" id="@cdktf/provider-cloudflare.record.Record.resetAllowOverwrite"></a>

```java
public void resetAllowOverwrite()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-cloudflare.record.Record.resetComment"></a>

```java
public void resetComment()
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-cloudflare.record.Record.resetContent"></a>

```java
public void resetContent()
```

##### `resetData` <a name="resetData" id="@cdktf/provider-cloudflare.record.Record.resetData"></a>

```java
public void resetData()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.record.Record.resetId"></a>

```java
public void resetId()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.record.Record.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProxied` <a name="resetProxied" id="@cdktf/provider-cloudflare.record.Record.resetProxied"></a>

```java
public void resetProxied()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-cloudflare.record.Record.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-cloudflare.record.Record.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-cloudflare.record.Record.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.record.Record.resetValue"></a>

```java
public void resetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Record resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.record.Record.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.record.Record;

Record.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.record.Record.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.record.Record.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.record.Record;

Record.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.record.Record.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.record.Record.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.record.Record;

Record.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.record.Record.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.record.Record;

Record.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Record.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Record resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Record to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Record that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Record to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference">RecordDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.proxiable">proxiable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference">RecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.allowOverwriteInput">allowOverwriteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.dataInput">dataInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.proxiedInput">proxiedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.allowOverwrite">allowOverwrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.proxied">proxied</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.record.Record.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.record.Record.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.record.Record.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.record.Record.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.record.Record.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.record.Record.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.record.Record.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.record.Record.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.record.Record.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.record.Record.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.record.Record.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.record.Record.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.Record.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.record.Record.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.record.Record.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-cloudflare.record.Record.property.data"></a>

```java
public RecordDataOutputReference getData();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference">RecordDataOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.record.Record.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-cloudflare.record.Record.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.record.Record.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `proxiable`<sup>Required</sup> <a name="proxiable" id="@cdktf/provider-cloudflare.record.Record.property.proxiable"></a>

```java
public IResolvable getProxiable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.record.Record.property.timeouts"></a>

```java
public RecordTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference">RecordTimeoutsOutputReference</a>

---

##### `allowOverwriteInput`<sup>Optional</sup> <a name="allowOverwriteInput" id="@cdktf/provider-cloudflare.record.Record.property.allowOverwriteInput"></a>

```java
public java.lang.Object getAllowOverwriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-cloudflare.record.Record.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-cloudflare.record.Record.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-cloudflare.record.Record.property.dataInput"></a>

```java
public RecordData getDataInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.record.Record.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.record.Record.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.record.Record.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `proxiedInput`<sup>Optional</sup> <a name="proxiedInput" id="@cdktf/provider-cloudflare.record.Record.property.proxiedInput"></a>

```java
public java.lang.Object getProxiedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-cloudflare.record.Record.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-cloudflare.record.Record.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-cloudflare.record.Record.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.record.Record.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.record.Record.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.record.Record.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `allowOverwrite`<sup>Required</sup> <a name="allowOverwrite" id="@cdktf/provider-cloudflare.record.Record.property.allowOverwrite"></a>

```java
public java.lang.Object getAllowOverwrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.record.Record.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.record.Record.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.record.Record.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.record.Record.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktf/provider-cloudflare.record.Record.property.proxied"></a>

```java
public java.lang.Object getProxied();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-cloudflare.record.Record.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.record.Record.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.record.Record.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.record.Record.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.record.Record.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RecordConfig <a name="RecordConfig" id="@cdktf/provider-cloudflare.record.RecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.record.RecordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.record.RecordConfig;

RecordConfig.builder()
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
    .name(java.lang.String)
    .type(java.lang.String)
    .zoneId(java.lang.String)
//  .allowOverwrite(java.lang.Boolean)
//  .allowOverwrite(IResolvable)
//  .comment(java.lang.String)
//  .content(java.lang.String)
//  .data(RecordData)
//  .id(java.lang.String)
//  .priority(java.lang.Number)
//  .proxied(java.lang.Boolean)
//  .proxied(IResolvable)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(RecordTimeouts)
//  .ttl(java.lang.Number)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the record. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.allowOverwrite">allowOverwrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow creation of this record in Terraform to overwrite an existing record, if any. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Comments or notes about the DNS record. This field has no effect on DNS responses. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.content">content</a></code> | <code>java.lang.String</code> | The content of the record. Must provide only one of `data`, `content`, `value`. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | data block. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#id Record#id}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.proxied">proxied</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the record gets Cloudflare's origin protection. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Custom tags for the DNS record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | The TTL of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.value">value</a></code> | <code>java.lang.String</code> | The value of the record. Must provide only one of `data`, `content`, `value`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.record.RecordConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.record.RecordConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.record.RecordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.record.RecordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.record.RecordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.RecordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.record.RecordConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.record.RecordConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the record. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#name Record#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.record.RecordConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the record.

Available values: `A`, `AAAA`, `CAA`, `CNAME`, `TXT`, `SRV`, `LOC`, `MX`, `NS`, `SPF`, `CERT`, `DNSKEY`, `DS`, `NAPTR`, `SMIMEA`, `SSHFP`, `TLSA`, `URI`, `PTR`, `HTTPS`, `SVCB`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#type Record#type}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.record.RecordConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#zone_id Record#zone_id}

---

##### `allowOverwrite`<sup>Optional</sup> <a name="allowOverwrite" id="@cdktf/provider-cloudflare.record.RecordConfig.property.allowOverwrite"></a>

```java
public java.lang.Object getAllowOverwrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow creation of this record in Terraform to overwrite an existing record, if any.

This does not affect the ability to update the record in Terraform and does not prevent other resources within Terraform or manual changes outside Terraform from overwriting this record. **This configuration is not recommended for most environments**. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#allow_overwrite Record#allow_overwrite}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.record.RecordConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Comments or notes about the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#comment Record#comment}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.record.RecordConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The content of the record. Must provide only one of `data`, `content`, `value`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#content Record#content}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-cloudflare.record.RecordConfig.property.data"></a>

```java
public RecordData getData();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#data Record#data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.record.RecordConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#id Record#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.record.RecordConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The priority of the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#priority Record#priority}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.record.RecordConfig.property.proxied"></a>

```java
public java.lang.Object getProxied();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the record gets Cloudflare's origin protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#proxied Record#proxied}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.record.RecordConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Custom tags for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#tags Record#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.record.RecordConfig.property.timeouts"></a>

```java
public RecordTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#timeouts Record#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.record.RecordConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

The TTL of the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#ttl Record#ttl}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.record.RecordConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the record. Must provide only one of `data`, `content`, `value`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#value Record#value}

---

### RecordData <a name="RecordData" id="@cdktf/provider-cloudflare.record.RecordData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.record.RecordData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.record.RecordData;

RecordData.builder()
//  .algorithm(java.lang.Number)
//  .altitude(java.lang.Number)
//  .certificate(java.lang.String)
//  .content(java.lang.String)
//  .digest(java.lang.String)
//  .digestType(java.lang.Number)
//  .fingerprint(java.lang.String)
//  .flags(java.lang.String)
//  .keyTag(java.lang.Number)
//  .latDegrees(java.lang.Number)
//  .latDirection(java.lang.String)
//  .latMinutes(java.lang.Number)
//  .latSeconds(java.lang.Number)
//  .longDegrees(java.lang.Number)
//  .longDirection(java.lang.String)
//  .longMinutes(java.lang.Number)
//  .longSeconds(java.lang.Number)
//  .matchingType(java.lang.Number)
//  .name(java.lang.String)
//  .order(java.lang.Number)
//  .port(java.lang.Number)
//  .precisionHorz(java.lang.Number)
//  .precisionVert(java.lang.Number)
//  .preference(java.lang.Number)
//  .priority(java.lang.Number)
//  .proto(java.lang.String)
//  .protocol(java.lang.Number)
//  .publicKey(java.lang.String)
//  .regex(java.lang.String)
//  .replacement(java.lang.String)
//  .selector(java.lang.Number)
//  .service(java.lang.String)
//  .size(java.lang.Number)
//  .tag(java.lang.String)
//  .target(java.lang.String)
//  .type(java.lang.Number)
//  .usage(java.lang.Number)
//  .value(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.algorithm">algorithm</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#algorithm Record#algorithm}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.altitude">altitude</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#altitude Record#altitude}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#certificate Record#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#content Record#content}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.digest">digest</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#digest Record#digest}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.digestType">digestType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#digest_type Record#digest_type}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#fingerprint Record#fingerprint}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.flags">flags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#flags Record#flags}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.keyTag">keyTag</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#key_tag Record#key_tag}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latDegrees">latDegrees</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#lat_degrees Record#lat_degrees}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latDirection">latDirection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#lat_direction Record#lat_direction}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latMinutes">latMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#lat_minutes Record#lat_minutes}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latSeconds">latSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#lat_seconds Record#lat_seconds}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longDegrees">longDegrees</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#long_degrees Record#long_degrees}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longDirection">longDirection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#long_direction Record#long_direction}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longMinutes">longMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#long_minutes Record#long_minutes}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longSeconds">longSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#long_seconds Record#long_seconds}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.matchingType">matchingType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#matching_type Record#matching_type}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#name Record#name}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.order">order</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#order Record#order}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#port Record#port}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.precisionHorz">precisionHorz</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#precision_horz Record#precision_horz}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.precisionVert">precisionVert</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#precision_vert Record#precision_vert}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.preference">preference</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#preference Record#preference}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#priority Record#priority}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.proto">proto</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#proto Record#proto}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.protocol">protocol</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#protocol Record#protocol}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#public_key Record#public_key}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#regex Record#regex}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.replacement">replacement</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#replacement Record#replacement}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.selector">selector</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#selector Record#selector}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#service Record#service}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#size Record#size}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.tag">tag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#tag Record#tag}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#target Record#target}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.type">type</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#type Record#type}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.usage">usage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#usage Record#usage}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#value Record#value}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#weight Record#weight}. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.record.RecordData.property.algorithm"></a>

```java
public java.lang.Number getAlgorithm();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#algorithm Record#algorithm}.

---

##### `altitude`<sup>Optional</sup> <a name="altitude" id="@cdktf/provider-cloudflare.record.RecordData.property.altitude"></a>

```java
public java.lang.Number getAltitude();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#altitude Record#altitude}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.record.RecordData.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#certificate Record#certificate}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.record.RecordData.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#content Record#content}.

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-cloudflare.record.RecordData.property.digest"></a>

```java
public java.lang.String getDigest();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#digest Record#digest}.

---

##### `digestType`<sup>Optional</sup> <a name="digestType" id="@cdktf/provider-cloudflare.record.RecordData.property.digestType"></a>

```java
public java.lang.Number getDigestType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#digest_type Record#digest_type}.

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.record.RecordData.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#fingerprint Record#fingerprint}.

---

##### `flags`<sup>Optional</sup> <a name="flags" id="@cdktf/provider-cloudflare.record.RecordData.property.flags"></a>

```java
public java.lang.String getFlags();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#flags Record#flags}.

---

##### `keyTag`<sup>Optional</sup> <a name="keyTag" id="@cdktf/provider-cloudflare.record.RecordData.property.keyTag"></a>

```java
public java.lang.Number getKeyTag();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#key_tag Record#key_tag}.

---

##### `latDegrees`<sup>Optional</sup> <a name="latDegrees" id="@cdktf/provider-cloudflare.record.RecordData.property.latDegrees"></a>

```java
public java.lang.Number getLatDegrees();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#lat_degrees Record#lat_degrees}.

---

##### `latDirection`<sup>Optional</sup> <a name="latDirection" id="@cdktf/provider-cloudflare.record.RecordData.property.latDirection"></a>

```java
public java.lang.String getLatDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#lat_direction Record#lat_direction}.

---

##### `latMinutes`<sup>Optional</sup> <a name="latMinutes" id="@cdktf/provider-cloudflare.record.RecordData.property.latMinutes"></a>

```java
public java.lang.Number getLatMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#lat_minutes Record#lat_minutes}.

---

##### `latSeconds`<sup>Optional</sup> <a name="latSeconds" id="@cdktf/provider-cloudflare.record.RecordData.property.latSeconds"></a>

```java
public java.lang.Number getLatSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#lat_seconds Record#lat_seconds}.

---

##### `longDegrees`<sup>Optional</sup> <a name="longDegrees" id="@cdktf/provider-cloudflare.record.RecordData.property.longDegrees"></a>

```java
public java.lang.Number getLongDegrees();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#long_degrees Record#long_degrees}.

---

##### `longDirection`<sup>Optional</sup> <a name="longDirection" id="@cdktf/provider-cloudflare.record.RecordData.property.longDirection"></a>

```java
public java.lang.String getLongDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#long_direction Record#long_direction}.

---

##### `longMinutes`<sup>Optional</sup> <a name="longMinutes" id="@cdktf/provider-cloudflare.record.RecordData.property.longMinutes"></a>

```java
public java.lang.Number getLongMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#long_minutes Record#long_minutes}.

---

##### `longSeconds`<sup>Optional</sup> <a name="longSeconds" id="@cdktf/provider-cloudflare.record.RecordData.property.longSeconds"></a>

```java
public java.lang.Number getLongSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#long_seconds Record#long_seconds}.

---

##### `matchingType`<sup>Optional</sup> <a name="matchingType" id="@cdktf/provider-cloudflare.record.RecordData.property.matchingType"></a>

```java
public java.lang.Number getMatchingType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#matching_type Record#matching_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.record.RecordData.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#name Record#name}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.record.RecordData.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#order Record#order}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.record.RecordData.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#port Record#port}.

---

##### `precisionHorz`<sup>Optional</sup> <a name="precisionHorz" id="@cdktf/provider-cloudflare.record.RecordData.property.precisionHorz"></a>

```java
public java.lang.Number getPrecisionHorz();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#precision_horz Record#precision_horz}.

---

##### `precisionVert`<sup>Optional</sup> <a name="precisionVert" id="@cdktf/provider-cloudflare.record.RecordData.property.precisionVert"></a>

```java
public java.lang.Number getPrecisionVert();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#precision_vert Record#precision_vert}.

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-cloudflare.record.RecordData.property.preference"></a>

```java
public java.lang.Number getPreference();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#preference Record#preference}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.record.RecordData.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#priority Record#priority}.

---

##### `proto`<sup>Optional</sup> <a name="proto" id="@cdktf/provider-cloudflare.record.RecordData.property.proto"></a>

```java
public java.lang.String getProto();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#proto Record#proto}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-cloudflare.record.RecordData.property.protocol"></a>

```java
public java.lang.Number getProtocol();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#protocol Record#protocol}.

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.record.RecordData.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#public_key Record#public_key}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-cloudflare.record.RecordData.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#regex Record#regex}.

---

##### `replacement`<sup>Optional</sup> <a name="replacement" id="@cdktf/provider-cloudflare.record.RecordData.property.replacement"></a>

```java
public java.lang.String getReplacement();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#replacement Record#replacement}.

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-cloudflare.record.RecordData.property.selector"></a>

```java
public java.lang.Number getSelector();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#selector Record#selector}.

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.record.RecordData.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#service Record#service}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-cloudflare.record.RecordData.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#size Record#size}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-cloudflare.record.RecordData.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#tag Record#tag}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-cloudflare.record.RecordData.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#target Record#target}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.record.RecordData.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#type Record#type}.

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-cloudflare.record.RecordData.property.usage"></a>

```java
public java.lang.Number getUsage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#usage Record#usage}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.record.RecordData.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#value Record#value}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.record.RecordData.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#weight Record#weight}.

---

### RecordTimeouts <a name="RecordTimeouts" id="@cdktf/provider-cloudflare.record.RecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.record.RecordTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.record.RecordTimeouts;

RecordTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#create Record#create}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#update Record#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-cloudflare.record.RecordTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#create Record#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-cloudflare.record.RecordTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/record#update Record#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecordDataOutputReference <a name="RecordDataOutputReference" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.record.RecordDataOutputReference;

new RecordDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAltitude">resetAltitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigest">resetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigestType">resetDigestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFingerprint">resetFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFlags">resetFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetKeyTag">resetKeyTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDegrees">resetLatDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDirection">resetLatDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatMinutes">resetLatMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatSeconds">resetLatSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDegrees">resetLongDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDirection">resetLongDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongMinutes">resetLongMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongSeconds">resetLongSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetMatchingType">resetMatchingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionHorz">resetPrecisionHorz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionVert">resetPrecisionVert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProto">resetProto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPublicKey">resetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetReplacement">resetReplacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetUsage">resetUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetAltitude` <a name="resetAltitude" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAltitude"></a>

```java
public void resetAltitude()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetDigest` <a name="resetDigest" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigest"></a>

```java
public void resetDigest()
```

##### `resetDigestType` <a name="resetDigestType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigestType"></a>

```java
public void resetDigestType()
```

##### `resetFingerprint` <a name="resetFingerprint" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFingerprint"></a>

```java
public void resetFingerprint()
```

##### `resetFlags` <a name="resetFlags" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFlags"></a>

```java
public void resetFlags()
```

##### `resetKeyTag` <a name="resetKeyTag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetKeyTag"></a>

```java
public void resetKeyTag()
```

##### `resetLatDegrees` <a name="resetLatDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDegrees"></a>

```java
public void resetLatDegrees()
```

##### `resetLatDirection` <a name="resetLatDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDirection"></a>

```java
public void resetLatDirection()
```

##### `resetLatMinutes` <a name="resetLatMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatMinutes"></a>

```java
public void resetLatMinutes()
```

##### `resetLatSeconds` <a name="resetLatSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatSeconds"></a>

```java
public void resetLatSeconds()
```

##### `resetLongDegrees` <a name="resetLongDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDegrees"></a>

```java
public void resetLongDegrees()
```

##### `resetLongDirection` <a name="resetLongDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDirection"></a>

```java
public void resetLongDirection()
```

##### `resetLongMinutes` <a name="resetLongMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongMinutes"></a>

```java
public void resetLongMinutes()
```

##### `resetLongSeconds` <a name="resetLongSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongSeconds"></a>

```java
public void resetLongSeconds()
```

##### `resetMatchingType` <a name="resetMatchingType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetMatchingType"></a>

```java
public void resetMatchingType()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPrecisionHorz` <a name="resetPrecisionHorz" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionHorz"></a>

```java
public void resetPrecisionHorz()
```

##### `resetPrecisionVert` <a name="resetPrecisionVert" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionVert"></a>

```java
public void resetPrecisionVert()
```

##### `resetPreference` <a name="resetPreference" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPreference"></a>

```java
public void resetPreference()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProto` <a name="resetProto" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProto"></a>

```java
public void resetProto()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPublicKey"></a>

```java
public void resetPublicKey()
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetReplacement` <a name="resetReplacement" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetReplacement"></a>

```java
public void resetReplacement()
```

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSelector"></a>

```java
public void resetSelector()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSize"></a>

```java
public void resetSize()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTag"></a>

```java
public void resetTag()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetUsage` <a name="resetUsage" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetUsage"></a>

```java
public void resetUsage()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitudeInput">altitudeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestInput">digestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestTypeInput">digestTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprintInput">fingerprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flagsInput">flagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTagInput">keyTagInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegreesInput">latDegreesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirectionInput">latDirectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutesInput">latMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSecondsInput">latSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegreesInput">longDegreesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirectionInput">longDirectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutesInput">longMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSecondsInput">longSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingTypeInput">matchingTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorzInput">precisionHorzInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVertInput">precisionVertInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protoInput">protoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacementInput">replacementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selectorInput">selectorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usageInput">usageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitude">altitude</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digest">digest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestType">digestType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flags">flags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTag">keyTag</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegrees">latDegrees</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirection">latDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutes">latMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSeconds">latSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegrees">longDegrees</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirection">longDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutes">longMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSeconds">longSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingType">matchingType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorz">precisionHorz</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVert">precisionVert</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preference">preference</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.proto">proto</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocol">protocol</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacement">replacement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selector">selector</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usage">usage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithmInput"></a>

```java
public java.lang.Number getAlgorithmInput();
```

- *Type:* java.lang.Number

---

##### `altitudeInput`<sup>Optional</sup> <a name="altitudeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitudeInput"></a>

```java
public java.lang.Number getAltitudeInput();
```

- *Type:* java.lang.Number

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `digestInput`<sup>Optional</sup> <a name="digestInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestInput"></a>

```java
public java.lang.String getDigestInput();
```

- *Type:* java.lang.String

---

##### `digestTypeInput`<sup>Optional</sup> <a name="digestTypeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestTypeInput"></a>

```java
public java.lang.Number getDigestTypeInput();
```

- *Type:* java.lang.Number

---

##### `fingerprintInput`<sup>Optional</sup> <a name="fingerprintInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprintInput"></a>

```java
public java.lang.String getFingerprintInput();
```

- *Type:* java.lang.String

---

##### `flagsInput`<sup>Optional</sup> <a name="flagsInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flagsInput"></a>

```java
public java.lang.String getFlagsInput();
```

- *Type:* java.lang.String

---

##### `keyTagInput`<sup>Optional</sup> <a name="keyTagInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTagInput"></a>

```java
public java.lang.Number getKeyTagInput();
```

- *Type:* java.lang.Number

---

##### `latDegreesInput`<sup>Optional</sup> <a name="latDegreesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegreesInput"></a>

```java
public java.lang.Number getLatDegreesInput();
```

- *Type:* java.lang.Number

---

##### `latDirectionInput`<sup>Optional</sup> <a name="latDirectionInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirectionInput"></a>

```java
public java.lang.String getLatDirectionInput();
```

- *Type:* java.lang.String

---

##### `latMinutesInput`<sup>Optional</sup> <a name="latMinutesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutesInput"></a>

```java
public java.lang.Number getLatMinutesInput();
```

- *Type:* java.lang.Number

---

##### `latSecondsInput`<sup>Optional</sup> <a name="latSecondsInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSecondsInput"></a>

```java
public java.lang.Number getLatSecondsInput();
```

- *Type:* java.lang.Number

---

##### `longDegreesInput`<sup>Optional</sup> <a name="longDegreesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegreesInput"></a>

```java
public java.lang.Number getLongDegreesInput();
```

- *Type:* java.lang.Number

---

##### `longDirectionInput`<sup>Optional</sup> <a name="longDirectionInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirectionInput"></a>

```java
public java.lang.String getLongDirectionInput();
```

- *Type:* java.lang.String

---

##### `longMinutesInput`<sup>Optional</sup> <a name="longMinutesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutesInput"></a>

```java
public java.lang.Number getLongMinutesInput();
```

- *Type:* java.lang.Number

---

##### `longSecondsInput`<sup>Optional</sup> <a name="longSecondsInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSecondsInput"></a>

```java
public java.lang.Number getLongSecondsInput();
```

- *Type:* java.lang.Number

---

##### `matchingTypeInput`<sup>Optional</sup> <a name="matchingTypeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingTypeInput"></a>

```java
public java.lang.Number getMatchingTypeInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `precisionHorzInput`<sup>Optional</sup> <a name="precisionHorzInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorzInput"></a>

```java
public java.lang.Number getPrecisionHorzInput();
```

- *Type:* java.lang.Number

---

##### `precisionVertInput`<sup>Optional</sup> <a name="precisionVertInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVertInput"></a>

```java
public java.lang.Number getPrecisionVertInput();
```

- *Type:* java.lang.Number

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preferenceInput"></a>

```java
public java.lang.Number getPreferenceInput();
```

- *Type:* java.lang.Number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocolInput"></a>

```java
public java.lang.Number getProtocolInput();
```

- *Type:* java.lang.Number

---

##### `protoInput`<sup>Optional</sup> <a name="protoInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protoInput"></a>

```java
public java.lang.String getProtoInput();
```

- *Type:* java.lang.String

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKeyInput"></a>

```java
public java.lang.String getPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `replacementInput`<sup>Optional</sup> <a name="replacementInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacementInput"></a>

```java
public java.lang.String getReplacementInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selectorInput"></a>

```java
public java.lang.Number getSelectorInput();
```

- *Type:* java.lang.Number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.typeInput"></a>

```java
public java.lang.Number getTypeInput();
```

- *Type:* java.lang.Number

---

##### `usageInput`<sup>Optional</sup> <a name="usageInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usageInput"></a>

```java
public java.lang.Number getUsageInput();
```

- *Type:* java.lang.Number

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithm"></a>

```java
public java.lang.Number getAlgorithm();
```

- *Type:* java.lang.Number

---

##### `altitude`<sup>Required</sup> <a name="altitude" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitude"></a>

```java
public java.lang.Number getAltitude();
```

- *Type:* java.lang.Number

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digest"></a>

```java
public java.lang.String getDigest();
```

- *Type:* java.lang.String

---

##### `digestType`<sup>Required</sup> <a name="digestType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestType"></a>

```java
public java.lang.Number getDigestType();
```

- *Type:* java.lang.Number

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flags"></a>

```java
public java.lang.String getFlags();
```

- *Type:* java.lang.String

---

##### `keyTag`<sup>Required</sup> <a name="keyTag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTag"></a>

```java
public java.lang.Number getKeyTag();
```

- *Type:* java.lang.Number

---

##### `latDegrees`<sup>Required</sup> <a name="latDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegrees"></a>

```java
public java.lang.Number getLatDegrees();
```

- *Type:* java.lang.Number

---

##### `latDirection`<sup>Required</sup> <a name="latDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirection"></a>

```java
public java.lang.String getLatDirection();
```

- *Type:* java.lang.String

---

##### `latMinutes`<sup>Required</sup> <a name="latMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutes"></a>

```java
public java.lang.Number getLatMinutes();
```

- *Type:* java.lang.Number

---

##### `latSeconds`<sup>Required</sup> <a name="latSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSeconds"></a>

```java
public java.lang.Number getLatSeconds();
```

- *Type:* java.lang.Number

---

##### `longDegrees`<sup>Required</sup> <a name="longDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegrees"></a>

```java
public java.lang.Number getLongDegrees();
```

- *Type:* java.lang.Number

---

##### `longDirection`<sup>Required</sup> <a name="longDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirection"></a>

```java
public java.lang.String getLongDirection();
```

- *Type:* java.lang.String

---

##### `longMinutes`<sup>Required</sup> <a name="longMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutes"></a>

```java
public java.lang.Number getLongMinutes();
```

- *Type:* java.lang.Number

---

##### `longSeconds`<sup>Required</sup> <a name="longSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSeconds"></a>

```java
public java.lang.Number getLongSeconds();
```

- *Type:* java.lang.Number

---

##### `matchingType`<sup>Required</sup> <a name="matchingType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingType"></a>

```java
public java.lang.Number getMatchingType();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `precisionHorz`<sup>Required</sup> <a name="precisionHorz" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorz"></a>

```java
public java.lang.Number getPrecisionHorz();
```

- *Type:* java.lang.Number

---

##### `precisionVert`<sup>Required</sup> <a name="precisionVert" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVert"></a>

```java
public java.lang.Number getPrecisionVert();
```

- *Type:* java.lang.Number

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preference"></a>

```java
public java.lang.Number getPreference();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `proto`<sup>Required</sup> <a name="proto" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.proto"></a>

```java
public java.lang.String getProto();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocol"></a>

```java
public java.lang.Number getProtocol();
```

- *Type:* java.lang.Number

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `replacement`<sup>Required</sup> <a name="replacement" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacement"></a>

```java
public java.lang.String getReplacement();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selector"></a>

```java
public java.lang.Number getSelector();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usage"></a>

```java
public java.lang.Number getUsage();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.internalValue"></a>

```java
public RecordData getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

---


### RecordTimeoutsOutputReference <a name="RecordTimeoutsOutputReference" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.record.RecordTimeoutsOutputReference;

new RecordTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>

---



