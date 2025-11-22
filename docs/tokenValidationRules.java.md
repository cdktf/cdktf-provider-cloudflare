# `tokenValidationRules` Submodule <a name="`tokenValidationRules` Submodule" id="@cdktf/provider-cloudflare.tokenValidationRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TokenValidationRules <a name="TokenValidationRules" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules cloudflare_token_validation_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRules;

TokenValidationRules.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .description(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
    .expression(java.lang.String)
    .selector(TokenValidationRulesSelector)
    .title(java.lang.String)
    .zoneId(java.lang.String)
//  .position(TokenValidationRulesPosition)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description that gives more details than `title`. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Toggle rule on or off. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.expression">expression</a></code> | <code>java.lang.String</code> | Rule expression. Requests that fail to match this expression will be subject to `action`. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.selector">selector</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a></code> | Select operations covered by this rule. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | A human-readable name for the rule. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.position">position</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a></code> | Update rule order among zone rules. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#action TokenValidationRules#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description that gives more details than `title`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#description TokenValidationRules#description}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Toggle rule on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#enabled TokenValidationRules#enabled}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.expression"></a>

- *Type:* java.lang.String

Rule expression. Requests that fail to match this expression will be subject to `action`.

For details on expressions, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#expression TokenValidationRules#expression}

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.selector"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a>

Select operations covered by this rule.

For details on selectors, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#selector TokenValidationRules#selector}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.title"></a>

- *Type:* java.lang.String

A human-readable name for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#title TokenValidationRules#title}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#zone_id TokenValidationRules#zone_id}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.position"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a>

Update rule order among zone rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#position TokenValidationRules#position}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putPosition">putPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.resetPosition">resetPosition</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPosition` <a name="putPosition" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putPosition"></a>

```java
public void putPosition(TokenValidationRulesPosition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putPosition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a>

---

##### `putSelector` <a name="putSelector" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putSelector"></a>

```java
public void putSelector(TokenValidationRulesSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a>

---

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.resetPosition"></a>

```java
public void resetPosition()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TokenValidationRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRules;

TokenValidationRules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRules;

TokenValidationRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRules;

TokenValidationRules.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRules;

TokenValidationRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TokenValidationRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TokenValidationRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TokenValidationRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TokenValidationRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TokenValidationRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.lastUpdated">lastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.position">position</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference">TokenValidationRulesPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference">TokenValidationRulesSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.positionInput">positionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.selectorInput">selectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.lastUpdated"></a>

```java
public java.lang.String getLastUpdated();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.position"></a>

```java
public TokenValidationRulesPositionOutputReference getPosition();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference">TokenValidationRulesPositionOutputReference</a>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.selector"></a>

```java
public TokenValidationRulesSelectorOutputReference getSelector();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference">TokenValidationRulesSelectorOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.positionInput"></a>

```java
public IResolvable|TokenValidationRulesPosition getPositionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a>

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.selectorInput"></a>

```java
public IResolvable|TokenValidationRulesSelector getSelectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TokenValidationRulesConfig <a name="TokenValidationRulesConfig" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRulesConfig;

TokenValidationRulesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .description(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
    .expression(java.lang.String)
    .selector(TokenValidationRulesSelector)
    .title(java.lang.String)
    .zoneId(java.lang.String)
//  .position(TokenValidationRulesPosition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.action">action</a></code> | <code>java.lang.String</code> | Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description that gives more details than `title`. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Toggle rule on or off. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.expression">expression</a></code> | <code>java.lang.String</code> | Rule expression. Requests that fail to match this expression will be subject to `action`. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a></code> | Select operations covered by this rule. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.title">title</a></code> | <code>java.lang.String</code> | A human-readable name for the rule. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.position">position</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a></code> | Update rule order among zone rules. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#action TokenValidationRules#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description that gives more details than `title`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#description TokenValidationRules#description}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Toggle rule on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#enabled TokenValidationRules#enabled}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Rule expression. Requests that fail to match this expression will be subject to `action`.

For details on expressions, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#expression TokenValidationRules#expression}

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.selector"></a>

```java
public TokenValidationRulesSelector getSelector();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a>

Select operations covered by this rule.

For details on selectors, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#selector TokenValidationRules#selector}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

A human-readable name for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#title TokenValidationRules#title}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#zone_id TokenValidationRules#zone_id}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.position"></a>

```java
public TokenValidationRulesPosition getPosition();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a>

Update rule order among zone rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#position TokenValidationRules#position}

---

### TokenValidationRulesPosition <a name="TokenValidationRulesPosition" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRulesPosition;

TokenValidationRulesPosition.builder()
//  .after(java.lang.String)
//  .before(java.lang.String)
//  .index(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.after">after</a></code> | <code>java.lang.String</code> | Move rule to after rule with this ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.before">before</a></code> | <code>java.lang.String</code> | Move rule to before rule with this ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.index">index</a></code> | <code>java.lang.Number</code> | Move rule to this position. |

---

##### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.after"></a>

```java
public java.lang.String getAfter();
```

- *Type:* java.lang.String

Move rule to after rule with this ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#after TokenValidationRules#after}

---

##### `before`<sup>Optional</sup> <a name="before" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.before"></a>

```java
public java.lang.String getBefore();
```

- *Type:* java.lang.String

Move rule to before rule with this ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#before TokenValidationRules#before}

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.index"></a>

```java
public java.lang.Number getIndex();
```

- *Type:* java.lang.Number

Move rule to this position.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#index TokenValidationRules#index}

---

### TokenValidationRulesSelector <a name="TokenValidationRulesSelector" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRulesSelector;

TokenValidationRulesSelector.builder()
//  .exclude(IResolvable|java.util.List<TokenValidationRulesSelectorExclude>)
//  .include(IResolvable|java.util.List<TokenValidationRulesSelectorInclude>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector.property.exclude">exclude</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>></code> | Ignore operations that were otherwise included by `include`. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector.property.include">include</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>></code> | Select all matching operations. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector.property.exclude"></a>

```java
public IResolvable|java.util.List<TokenValidationRulesSelectorExclude> getExclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>>

Ignore operations that were otherwise included by `include`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#exclude TokenValidationRules#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector.property.include"></a>

```java
public IResolvable|java.util.List<TokenValidationRulesSelectorInclude> getInclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>>

Select all matching operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#include TokenValidationRules#include}

---

### TokenValidationRulesSelectorExclude <a name="TokenValidationRulesSelectorExclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRulesSelectorExclude;

TokenValidationRulesSelectorExclude.builder()
//  .operationIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude.property.operationIds">operationIds</a></code> | <code>java.util.List<java.lang.String></code> | Excluded operation IDs. |

---

##### `operationIds`<sup>Optional</sup> <a name="operationIds" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude.property.operationIds"></a>

```java
public java.util.List<java.lang.String> getOperationIds();
```

- *Type:* java.util.List<java.lang.String>

Excluded operation IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#operation_ids TokenValidationRules#operation_ids}

---

### TokenValidationRulesSelectorInclude <a name="TokenValidationRulesSelectorInclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRulesSelectorInclude;

TokenValidationRulesSelectorInclude.builder()
//  .host(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude.property.host">host</a></code> | <code>java.util.List<java.lang.String></code> | Included hostnames. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude.property.host"></a>

```java
public java.util.List<java.lang.String> getHost();
```

- *Type:* java.util.List<java.lang.String>

Included hostnames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#host TokenValidationRules#host}

---

## Classes <a name="Classes" id="Classes"></a>

### TokenValidationRulesPositionOutputReference <a name="TokenValidationRulesPositionOutputReference" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRulesPositionOutputReference;

new TokenValidationRulesPositionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetAfter">resetAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetBefore">resetBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetIndex">resetIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfter` <a name="resetAfter" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetAfter"></a>

```java
public void resetAfter()
```

##### `resetBefore` <a name="resetBefore" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetBefore"></a>

```java
public void resetBefore()
```

##### `resetIndex` <a name="resetIndex" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetIndex"></a>

```java
public void resetIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.afterInput">afterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.beforeInput">beforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.indexInput">indexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.after">after</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.before">before</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.index">index</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterInput`<sup>Optional</sup> <a name="afterInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.afterInput"></a>

```java
public java.lang.String getAfterInput();
```

- *Type:* java.lang.String

---

##### `beforeInput`<sup>Optional</sup> <a name="beforeInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.beforeInput"></a>

```java
public java.lang.String getBeforeInput();
```

- *Type:* java.lang.String

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.indexInput"></a>

```java
public java.lang.Number getIndexInput();
```

- *Type:* java.lang.Number

---

##### `after`<sup>Required</sup> <a name="after" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.after"></a>

```java
public java.lang.String getAfter();
```

- *Type:* java.lang.String

---

##### `before`<sup>Required</sup> <a name="before" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.before"></a>

```java
public java.lang.String getBefore();
```

- *Type:* java.lang.String

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.index"></a>

```java
public java.lang.Number getIndex();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.internalValue"></a>

```java
public IResolvable|TokenValidationRulesPosition getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a>

---


### TokenValidationRulesSelectorExcludeList <a name="TokenValidationRulesSelectorExcludeList" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRulesSelectorExcludeList;

new TokenValidationRulesSelectorExcludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.get"></a>

```java
public TokenValidationRulesSelectorExcludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TokenValidationRulesSelectorExclude> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>>

---


### TokenValidationRulesSelectorExcludeOutputReference <a name="TokenValidationRulesSelectorExcludeOutputReference" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRulesSelectorExcludeOutputReference;

new TokenValidationRulesSelectorExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.resetOperationIds">resetOperationIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperationIds` <a name="resetOperationIds" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.resetOperationIds"></a>

```java
public void resetOperationIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.operationIdsInput">operationIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.operationIds">operationIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operationIdsInput`<sup>Optional</sup> <a name="operationIdsInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.operationIdsInput"></a>

```java
public java.util.List<java.lang.String> getOperationIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operationIds`<sup>Required</sup> <a name="operationIds" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.operationIds"></a>

```java
public java.util.List<java.lang.String> getOperationIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.internalValue"></a>

```java
public IResolvable|TokenValidationRulesSelectorExclude getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>

---


### TokenValidationRulesSelectorIncludeList <a name="TokenValidationRulesSelectorIncludeList" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRulesSelectorIncludeList;

new TokenValidationRulesSelectorIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.get"></a>

```java
public TokenValidationRulesSelectorIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TokenValidationRulesSelectorInclude> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>>

---


### TokenValidationRulesSelectorIncludeOutputReference <a name="TokenValidationRulesSelectorIncludeOutputReference" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRulesSelectorIncludeOutputReference;

new TokenValidationRulesSelectorIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.resetHost">resetHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.resetHost"></a>

```java
public void resetHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.hostInput">hostInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.host">host</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.hostInput"></a>

```java
public java.util.List<java.lang.String> getHostInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.host"></a>

```java
public java.util.List<java.lang.String> getHost();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.internalValue"></a>

```java
public IResolvable|TokenValidationRulesSelectorInclude getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>

---


### TokenValidationRulesSelectorOutputReference <a name="TokenValidationRulesSelectorOutputReference" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.token_validation_rules.TokenValidationRulesSelectorOutputReference;

new TokenValidationRulesSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putExclude">putExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putInclude">putInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclude` <a name="putExclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putExclude"></a>

```java
public void putExclude(IResolvable|java.util.List<TokenValidationRulesSelectorExclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putExclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>>

---

##### `putInclude` <a name="putInclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putInclude"></a>

```java
public void putInclude(IResolvable|java.util.List<TokenValidationRulesSelectorInclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putInclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>>

---

##### `resetExclude` <a name="resetExclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resetExclude"></a>

```java
public void resetExclude()
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resetInclude"></a>

```java
public void resetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList">TokenValidationRulesSelectorExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList">TokenValidationRulesSelectorIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.excludeInput">excludeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.includeInput">includeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.exclude"></a>

```java
public TokenValidationRulesSelectorExcludeList getExclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList">TokenValidationRulesSelectorExcludeList</a>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.include"></a>

```java
public TokenValidationRulesSelectorIncludeList getInclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList">TokenValidationRulesSelectorIncludeList</a>

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.excludeInput"></a>

```java
public IResolvable|java.util.List<TokenValidationRulesSelectorExclude> getExcludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>>

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.includeInput"></a>

```java
public IResolvable|java.util.List<TokenValidationRulesSelectorInclude> getIncludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.internalValue"></a>

```java
public IResolvable|TokenValidationRulesSelector getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a>

---



