# `emailRoutingCatchAll` Submodule <a name="`emailRoutingCatchAll` Submodule" id="@cdktf/provider-cloudflare.emailRoutingCatchAll"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailRoutingCatchAll <a name="EmailRoutingCatchAll" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all cloudflare_email_routing_catch_all}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.email_routing_catch_all.EmailRoutingCatchAll;

EmailRoutingCatchAll.Builder.create(Construct scope, java.lang.String id)
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
    .action(IResolvable)
    .action(java.util.List<EmailRoutingCatchAllAction>)
    .matcher(IResolvable)
    .matcher(java.util.List<EmailRoutingCatchAllMatcher>)
    .name(java.lang.String)
    .zoneId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction">EmailRoutingCatchAllAction</a>></code> | action block. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.matcher">matcher</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher">EmailRoutingCatchAllMatcher</a>></code> | matcher block. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Routing rule name. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Routing rule status. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#id EmailRoutingCatchAll#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.action"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction">EmailRoutingCatchAllAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#action EmailRoutingCatchAll#action}

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.matcher"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher">EmailRoutingCatchAllMatcher</a>>

matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#matcher EmailRoutingCatchAll#matcher}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Routing rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#name EmailRoutingCatchAll#name}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#zone_id EmailRoutingCatchAll#zone_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Routing rule status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#enabled EmailRoutingCatchAll#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#id EmailRoutingCatchAll#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.putMatcher">putMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.putAction"></a>

```java
public void putAction(IResolvable OR java.util.List<EmailRoutingCatchAllAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.putAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction">EmailRoutingCatchAllAction</a>>

---

##### `putMatcher` <a name="putMatcher" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.putMatcher"></a>

```java
public void putMatcher(IResolvable OR java.util.List<EmailRoutingCatchAllMatcher> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.putMatcher.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher">EmailRoutingCatchAllMatcher</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EmailRoutingCatchAll resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.email_routing_catch_all.EmailRoutingCatchAll;

EmailRoutingCatchAll.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.email_routing_catch_all.EmailRoutingCatchAll;

EmailRoutingCatchAll.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.email_routing_catch_all.EmailRoutingCatchAll;

EmailRoutingCatchAll.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.email_routing_catch_all.EmailRoutingCatchAll;

EmailRoutingCatchAll.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EmailRoutingCatchAll.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EmailRoutingCatchAll resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EmailRoutingCatchAll to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EmailRoutingCatchAll that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EmailRoutingCatchAll to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.action">action</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList">EmailRoutingCatchAllActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.matcher">matcher</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList">EmailRoutingCatchAllMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.actionInput">actionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction">EmailRoutingCatchAllAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.matcherInput">matcherInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher">EmailRoutingCatchAllMatcher</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.action"></a>

```java
public EmailRoutingCatchAllActionList getAction();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList">EmailRoutingCatchAllActionList</a>

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.matcher"></a>

```java
public EmailRoutingCatchAllMatcherList getMatcher();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList">EmailRoutingCatchAllMatcherList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.actionInput"></a>

```java
public java.lang.Object getActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction">EmailRoutingCatchAllAction</a>>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.matcherInput"></a>

```java
public java.lang.Object getMatcherInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher">EmailRoutingCatchAllMatcher</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EmailRoutingCatchAllAction <a name="EmailRoutingCatchAllAction" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.email_routing_catch_all.EmailRoutingCatchAllAction;

EmailRoutingCatchAllAction.builder()
    .type(java.lang.String)
    .value(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction.property.type">type</a></code> | <code>java.lang.String</code> | Type of supported action. Available values: `drop`, `forward`, `worker`. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | A list with items in the following form. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of supported action. Available values: `drop`, `forward`, `worker`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#type EmailRoutingCatchAll#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

A list with items in the following form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#value EmailRoutingCatchAll#value}

---

### EmailRoutingCatchAllConfig <a name="EmailRoutingCatchAllConfig" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.email_routing_catch_all.EmailRoutingCatchAllConfig;

EmailRoutingCatchAllConfig.builder()
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
    .action(IResolvable)
    .action(java.util.List<EmailRoutingCatchAllAction>)
    .matcher(IResolvable)
    .matcher(java.util.List<EmailRoutingCatchAllMatcher>)
    .name(java.lang.String)
    .zoneId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.action">action</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction">EmailRoutingCatchAllAction</a>></code> | action block. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.matcher">matcher</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher">EmailRoutingCatchAllMatcher</a>></code> | matcher block. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.name">name</a></code> | <code>java.lang.String</code> | Routing rule name. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Routing rule status. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#id EmailRoutingCatchAll#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.action"></a>

```java
public java.lang.Object getAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction">EmailRoutingCatchAllAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#action EmailRoutingCatchAll#action}

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.matcher"></a>

```java
public java.lang.Object getMatcher();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher">EmailRoutingCatchAllMatcher</a>>

matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#matcher EmailRoutingCatchAll#matcher}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Routing rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#name EmailRoutingCatchAll#name}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#zone_id EmailRoutingCatchAll#zone_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Routing rule status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#enabled EmailRoutingCatchAll#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#id EmailRoutingCatchAll#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EmailRoutingCatchAllMatcher <a name="EmailRoutingCatchAllMatcher" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.email_routing_catch_all.EmailRoutingCatchAllMatcher;

EmailRoutingCatchAllMatcher.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher.property.type">type</a></code> | <code>java.lang.String</code> | Type of matcher. Available values: `all`. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of matcher. Available values: `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/email_routing_catch_all#type EmailRoutingCatchAll#type}

---

## Classes <a name="Classes" id="Classes"></a>

### EmailRoutingCatchAllActionList <a name="EmailRoutingCatchAllActionList" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.email_routing_catch_all.EmailRoutingCatchAllActionList;

new EmailRoutingCatchAllActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.get"></a>

```java
public EmailRoutingCatchAllActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction">EmailRoutingCatchAllAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction">EmailRoutingCatchAllAction</a>>

---


### EmailRoutingCatchAllActionOutputReference <a name="EmailRoutingCatchAllActionOutputReference" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.email_routing_catch_all.EmailRoutingCatchAllActionOutputReference;

new EmailRoutingCatchAllActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.valueInput">valueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction">EmailRoutingCatchAllAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.valueInput"></a>

```java
public java.util.List<java.lang.String> getValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction">EmailRoutingCatchAllAction</a>

---


### EmailRoutingCatchAllMatcherList <a name="EmailRoutingCatchAllMatcherList" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.email_routing_catch_all.EmailRoutingCatchAllMatcherList;

new EmailRoutingCatchAllMatcherList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.get"></a>

```java
public EmailRoutingCatchAllMatcherOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher">EmailRoutingCatchAllMatcher</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher">EmailRoutingCatchAllMatcher</a>>

---


### EmailRoutingCatchAllMatcherOutputReference <a name="EmailRoutingCatchAllMatcherOutputReference" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.email_routing_catch_all.EmailRoutingCatchAllMatcherOutputReference;

new EmailRoutingCatchAllMatcherOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher">EmailRoutingCatchAllMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher">EmailRoutingCatchAllMatcher</a>

---



