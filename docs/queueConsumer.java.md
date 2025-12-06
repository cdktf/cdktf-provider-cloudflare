# `queueConsumer` Submodule <a name="`queueConsumer` Submodule" id="@cdktf/provider-cloudflare.queueConsumer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QueueConsumer <a name="QueueConsumer" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer cloudflare_queue_consumer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.queue_consumer.QueueConsumer;

QueueConsumer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .queueId(java.lang.String)
//  .deadLetterQueue(java.lang.String)
//  .scriptName(java.lang.String)
//  .settings(QueueConsumerSettings)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | A Resource identifier. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.queueId">queueId</a></code> | <code>java.lang.String</code> | A Resource identifier. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.deadLetterQueue">deadLetterQueue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#dead_letter_queue QueueConsumer#dead_letter_queue}. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.scriptName">scriptName</a></code> | <code>java.lang.String</code> | Name of a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#settings QueueConsumer#settings}. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Available values: "worker", "http_pull". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

A Resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#account_id QueueConsumer#account_id}

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.queueId"></a>

- *Type:* java.lang.String

A Resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#queue_id QueueConsumer#queue_id}

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.deadLetterQueue"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#dead_letter_queue QueueConsumer#dead_letter_queue}.

---

##### `scriptName`<sup>Optional</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.scriptName"></a>

- *Type:* java.lang.String

Name of a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#script_name QueueConsumer#script_name}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#settings QueueConsumer#settings}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Available values: "worker", "http_pull".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#type QueueConsumer#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetDeadLetterQueue">resetDeadLetterQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetScriptName">resetScriptName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.putSettings"></a>

```java
public void putSettings(QueueConsumerSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a>

---

##### `resetDeadLetterQueue` <a name="resetDeadLetterQueue" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetDeadLetterQueue"></a>

```java
public void resetDeadLetterQueue()
```

##### `resetScriptName` <a name="resetScriptName" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetScriptName"></a>

```java
public void resetScriptName()
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetSettings"></a>

```java
public void resetSettings()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QueueConsumer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.queue_consumer.QueueConsumer;

QueueConsumer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.queue_consumer.QueueConsumer;

QueueConsumer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.queue_consumer.QueueConsumer;

QueueConsumer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.queue_consumer.QueueConsumer;

QueueConsumer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QueueConsumer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a QueueConsumer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QueueConsumer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QueueConsumer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the QueueConsumer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.consumerId">consumerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.script">script</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference">QueueConsumerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.deadLetterQueueInput">deadLetterQueueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.queueIdInput">queueIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.scriptNameInput">scriptNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.settingsInput">settingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.deadLetterQueue">deadLetterQueue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.queueId">queueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.scriptName">scriptName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `consumerId`<sup>Required</sup> <a name="consumerId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.consumerId"></a>

```java
public java.lang.String getConsumerId();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.settings"></a>

```java
public QueueConsumerSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference">QueueConsumerSettingsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `deadLetterQueueInput`<sup>Optional</sup> <a name="deadLetterQueueInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.deadLetterQueueInput"></a>

```java
public java.lang.String getDeadLetterQueueInput();
```

- *Type:* java.lang.String

---

##### `queueIdInput`<sup>Optional</sup> <a name="queueIdInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.queueIdInput"></a>

```java
public java.lang.String getQueueIdInput();
```

- *Type:* java.lang.String

---

##### `scriptNameInput`<sup>Optional</sup> <a name="scriptNameInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.scriptNameInput"></a>

```java
public java.lang.String getScriptNameInput();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.settingsInput"></a>

```java
public IResolvable|QueueConsumerSettings getSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `deadLetterQueue`<sup>Required</sup> <a name="deadLetterQueue" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.deadLetterQueue"></a>

```java
public java.lang.String getDeadLetterQueue();
```

- *Type:* java.lang.String

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.queueId"></a>

```java
public java.lang.String getQueueId();
```

- *Type:* java.lang.String

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.scriptName"></a>

```java
public java.lang.String getScriptName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QueueConsumerConfig <a name="QueueConsumerConfig" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.queue_consumer.QueueConsumerConfig;

QueueConsumerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .queueId(java.lang.String)
//  .deadLetterQueue(java.lang.String)
//  .scriptName(java.lang.String)
//  .settings(QueueConsumerSettings)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | A Resource identifier. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.queueId">queueId</a></code> | <code>java.lang.String</code> | A Resource identifier. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.deadLetterQueue">deadLetterQueue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#dead_letter_queue QueueConsumer#dead_letter_queue}. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.scriptName">scriptName</a></code> | <code>java.lang.String</code> | Name of a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#settings QueueConsumer#settings}. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "worker", "http_pull". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

A Resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#account_id QueueConsumer#account_id}

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.queueId"></a>

```java
public java.lang.String getQueueId();
```

- *Type:* java.lang.String

A Resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#queue_id QueueConsumer#queue_id}

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.deadLetterQueue"></a>

```java
public java.lang.String getDeadLetterQueue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#dead_letter_queue QueueConsumer#dead_letter_queue}.

---

##### `scriptName`<sup>Optional</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.scriptName"></a>

```java
public java.lang.String getScriptName();
```

- *Type:* java.lang.String

Name of a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#script_name QueueConsumer#script_name}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.settings"></a>

```java
public QueueConsumerSettings getSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#settings QueueConsumer#settings}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "worker", "http_pull".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#type QueueConsumer#type}

---

### QueueConsumerSettings <a name="QueueConsumerSettings" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.queue_consumer.QueueConsumerSettings;

QueueConsumerSettings.builder()
//  .batchSize(java.lang.Number)
//  .maxConcurrency(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .maxWaitTimeMs(java.lang.Number)
//  .retryDelay(java.lang.Number)
//  .visibilityTimeoutMs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | The maximum number of messages to include in a batch. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | Maximum number of concurrent consumers that may consume from this Queue. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | The maximum number of retries. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxWaitTimeMs">maxWaitTimeMs</a></code> | <code>java.lang.Number</code> | The number of milliseconds to wait for a batch to fill up before attempting to deliver it. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.retryDelay">retryDelay</a></code> | <code>java.lang.Number</code> | The number of seconds to delay before making the message available for another attempt. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.visibilityTimeoutMs">visibilityTimeoutMs</a></code> | <code>java.lang.Number</code> | The number of milliseconds that a message is exclusively leased. |

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

The maximum number of messages to include in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#batch_size QueueConsumer#batch_size}

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxConcurrency"></a>

```java
public java.lang.Number getMaxConcurrency();
```

- *Type:* java.lang.Number

Maximum number of concurrent consumers that may consume from this Queue.

Set to `null` to automatically opt in to the platform's maximum (recommended).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#max_concurrency QueueConsumer#max_concurrency}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

The maximum number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#max_retries QueueConsumer#max_retries}

---

##### `maxWaitTimeMs`<sup>Optional</sup> <a name="maxWaitTimeMs" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxWaitTimeMs"></a>

```java
public java.lang.Number getMaxWaitTimeMs();
```

- *Type:* java.lang.Number

The number of milliseconds to wait for a batch to fill up before attempting to deliver it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#max_wait_time_ms QueueConsumer#max_wait_time_ms}

---

##### `retryDelay`<sup>Optional</sup> <a name="retryDelay" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.retryDelay"></a>

```java
public java.lang.Number getRetryDelay();
```

- *Type:* java.lang.Number

The number of seconds to delay before making the message available for another attempt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#retry_delay QueueConsumer#retry_delay}

---

##### `visibilityTimeoutMs`<sup>Optional</sup> <a name="visibilityTimeoutMs" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.visibilityTimeoutMs"></a>

```java
public java.lang.Number getVisibilityTimeoutMs();
```

- *Type:* java.lang.Number

The number of milliseconds that a message is exclusively leased.

After the timeout, the message becomes available for another attempt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/queue_consumer#visibility_timeout_ms QueueConsumer#visibility_timeout_ms}

---

## Classes <a name="Classes" id="Classes"></a>

### QueueConsumerSettingsOutputReference <a name="QueueConsumerSettingsOutputReference" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.queue_consumer.QueueConsumerSettingsOutputReference;

new QueueConsumerSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxConcurrency">resetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxWaitTimeMs">resetMaxWaitTimeMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetRetryDelay">resetRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetVisibilityTimeoutMs">resetVisibilityTimeoutMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetBatchSize"></a>

```java
public void resetBatchSize()
```

##### `resetMaxConcurrency` <a name="resetMaxConcurrency" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxConcurrency"></a>

```java
public void resetMaxConcurrency()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetMaxWaitTimeMs` <a name="resetMaxWaitTimeMs" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxWaitTimeMs"></a>

```java
public void resetMaxWaitTimeMs()
```

##### `resetRetryDelay` <a name="resetRetryDelay" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetRetryDelay"></a>

```java
public void resetRetryDelay()
```

##### `resetVisibilityTimeoutMs` <a name="resetVisibilityTimeoutMs" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetVisibilityTimeoutMs"></a>

```java
public void resetVisibilityTimeoutMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxConcurrencyInput">maxConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxWaitTimeMsInput">maxWaitTimeMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.retryDelayInput">retryDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.visibilityTimeoutMsInput">visibilityTimeoutMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxWaitTimeMs">maxWaitTimeMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.retryDelay">retryDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.visibilityTimeoutMs">visibilityTimeoutMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.batchSizeInput"></a>

```java
public java.lang.Number getBatchSizeInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrencyInput`<sup>Optional</sup> <a name="maxConcurrencyInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxConcurrencyInput"></a>

```java
public java.lang.Number getMaxConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `maxWaitTimeMsInput`<sup>Optional</sup> <a name="maxWaitTimeMsInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxWaitTimeMsInput"></a>

```java
public java.lang.Number getMaxWaitTimeMsInput();
```

- *Type:* java.lang.Number

---

##### `retryDelayInput`<sup>Optional</sup> <a name="retryDelayInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.retryDelayInput"></a>

```java
public java.lang.Number getRetryDelayInput();
```

- *Type:* java.lang.Number

---

##### `visibilityTimeoutMsInput`<sup>Optional</sup> <a name="visibilityTimeoutMsInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.visibilityTimeoutMsInput"></a>

```java
public java.lang.Number getVisibilityTimeoutMsInput();
```

- *Type:* java.lang.Number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxConcurrency"></a>

```java
public java.lang.Number getMaxConcurrency();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `maxWaitTimeMs`<sup>Required</sup> <a name="maxWaitTimeMs" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxWaitTimeMs"></a>

```java
public java.lang.Number getMaxWaitTimeMs();
```

- *Type:* java.lang.Number

---

##### `retryDelay`<sup>Required</sup> <a name="retryDelay" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.retryDelay"></a>

```java
public java.lang.Number getRetryDelay();
```

- *Type:* java.lang.Number

---

##### `visibilityTimeoutMs`<sup>Required</sup> <a name="visibilityTimeoutMs" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.visibilityTimeoutMs"></a>

```java
public java.lang.Number getVisibilityTimeoutMs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|QueueConsumerSettings getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a>

---



