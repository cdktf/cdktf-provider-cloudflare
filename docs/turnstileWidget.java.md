# `turnstileWidget` Submodule <a name="`turnstileWidget` Submodule" id="@cdktf/provider-cloudflare.turnstileWidget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TurnstileWidget <a name="TurnstileWidget" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget cloudflare_turnstile_widget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.turnstile_widget.TurnstileWidget;

TurnstileWidget.Builder.create(Construct scope, java.lang.String id)
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
    .domains(java.util.List<java.lang.String>)
    .mode(java.lang.String)
    .name(java.lang.String)
//  .botFightMode(java.lang.Boolean)
//  .botFightMode(IResolvable)
//  .id(java.lang.String)
//  .offlabel(java.lang.Boolean)
//  .offlabel(IResolvable)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | Domains where the widget is deployed. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | Widget Mode. Available values: `non-interactive`, `invisible`, `managed`. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Human readable widget name. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.botFightMode">botFightMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If bot_fight_mode is set to true, Cloudflare issues computationally expensive challenges in response to malicious bots (Enterprise only). |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The identifier of this resource. This is the site key value. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.offlabel">offlabel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not show any Cloudflare branding on the widget (Enterprise only). |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this widget can be used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#account_id TurnstileWidget#account_id}

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.domains"></a>

- *Type:* java.util.List<java.lang.String>

Domains where the widget is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#domains TurnstileWidget#domains}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

Widget Mode. Available values: `non-interactive`, `invisible`, `managed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#mode TurnstileWidget#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Human readable widget name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#name TurnstileWidget#name}

---

##### `botFightMode`<sup>Optional</sup> <a name="botFightMode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.botFightMode"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If bot_fight_mode is set to true, Cloudflare issues computationally expensive challenges in response to malicious bots (Enterprise only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#bot_fight_mode TurnstileWidget#bot_fight_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The identifier of this resource. This is the site key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#id TurnstileWidget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offlabel`<sup>Optional</sup> <a name="offlabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.offlabel"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not show any Cloudflare branding on the widget (Enterprise only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#offlabel TurnstileWidget#offlabel}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this widget can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#region TurnstileWidget#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetBotFightMode">resetBotFightMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOfflabel">resetOfflabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBotFightMode` <a name="resetBotFightMode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetBotFightMode"></a>

```java
public void resetBotFightMode()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetId"></a>

```java
public void resetId()
```

##### `resetOfflabel` <a name="resetOfflabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOfflabel"></a>

```java
public void resetOfflabel()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TurnstileWidget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.turnstile_widget.TurnstileWidget;

TurnstileWidget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.turnstile_widget.TurnstileWidget;

TurnstileWidget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.turnstile_widget.TurnstileWidget;

TurnstileWidget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.turnstile_widget.TurnstileWidget;

TurnstileWidget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TurnstileWidget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TurnstileWidget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TurnstileWidget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TurnstileWidget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TurnstileWidget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightModeInput">botFightModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domainsInput">domainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabelInput">offlabelInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightMode">botFightMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabel">offlabel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `botFightModeInput`<sup>Optional</sup> <a name="botFightModeInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightModeInput"></a>

```java
public java.lang.Object getBotFightModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domainsInput"></a>

```java
public java.util.List<java.lang.String> getDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `offlabelInput`<sup>Optional</sup> <a name="offlabelInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabelInput"></a>

```java
public java.lang.Object getOfflabelInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `botFightMode`<sup>Required</sup> <a name="botFightMode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightMode"></a>

```java
public java.lang.Object getBotFightMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `offlabel`<sup>Required</sup> <a name="offlabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabel"></a>

```java
public java.lang.Object getOfflabel();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TurnstileWidgetConfig <a name="TurnstileWidgetConfig" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.turnstile_widget.TurnstileWidgetConfig;

TurnstileWidgetConfig.builder()
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
    .domains(java.util.List<java.lang.String>)
    .mode(java.lang.String)
    .name(java.lang.String)
//  .botFightMode(java.lang.Boolean)
//  .botFightMode(IResolvable)
//  .id(java.lang.String)
//  .offlabel(java.lang.Boolean)
//  .offlabel(IResolvable)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | Domains where the widget is deployed. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Widget Mode. Available values: `non-interactive`, `invisible`, `managed`. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Human readable widget name. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.botFightMode">botFightMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If bot_fight_mode is set to true, Cloudflare issues computationally expensive challenges in response to malicious bots (Enterprise only). |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.id">id</a></code> | <code>java.lang.String</code> | The identifier of this resource. This is the site key value. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.offlabel">offlabel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not show any Cloudflare branding on the widget (Enterprise only). |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this widget can be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#account_id TurnstileWidget#account_id}

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

Domains where the widget is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#domains TurnstileWidget#domains}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Widget Mode. Available values: `non-interactive`, `invisible`, `managed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#mode TurnstileWidget#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Human readable widget name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#name TurnstileWidget#name}

---

##### `botFightMode`<sup>Optional</sup> <a name="botFightMode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.botFightMode"></a>

```java
public java.lang.Object getBotFightMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If bot_fight_mode is set to true, Cloudflare issues computationally expensive challenges in response to malicious bots (Enterprise only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#bot_fight_mode TurnstileWidget#bot_fight_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The identifier of this resource. This is the site key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#id TurnstileWidget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offlabel`<sup>Optional</sup> <a name="offlabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.offlabel"></a>

```java
public java.lang.Object getOfflabel();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not show any Cloudflare branding on the widget (Enterprise only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#offlabel TurnstileWidget#offlabel}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this widget can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#region TurnstileWidget#region}

---



