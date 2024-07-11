# `teamsRule` Submodule <a name="`teamsRule` Submodule" id="@cdktf/provider-cloudflare.teamsRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamsRule <a name="TeamsRule" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule cloudflare_teams_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRule;

TeamsRule.Builder.create(Construct scope, java.lang.String id)
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
    .action(java.lang.String)
    .description(java.lang.String)
    .name(java.lang.String)
    .precedence(java.lang.Number)
//  .devicePosture(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .filters(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .identity(java.lang.String)
//  .ruleSettings(TeamsRuleRuleSettings)
//  .traffic(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | The action executed by matched teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.precedence">precedence</a></code> | <code>java.lang.Number</code> | The evaluation precedence of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.devicePosture">devicePosture</a></code> | <code>java.lang.String</code> | The wirefilter expression to be used for device_posture check matching. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicator of rule enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.filters">filters</a></code> | <code>java.util.List<java.lang.String></code> | The protocol or layer to evaluate the traffic and identity expressions. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#id TeamsRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.identity">identity</a></code> | <code>java.lang.String</code> | The wirefilter expression to be used for identity matching. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.ruleSettings">ruleSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a></code> | rule_settings block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.traffic">traffic</a></code> | <code>java.lang.String</code> | The wirefilter expression to be used for traffic matching. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#account_id TeamsRule#account_id}

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.action"></a>

- *Type:* java.lang.String

The action executed by matched teams rule.

Available values: `allow`, `block`, `safesearch`, `ytrestricted`, `on`, `off`, `scan`, `noscan`, `isolate`, `noisolate`, `override`, `l4_override`, `egress`, `audit_ssh`, `resolve`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#action TeamsRule#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#description TeamsRule#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#name TeamsRule#name}

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.precedence"></a>

- *Type:* java.lang.Number

The evaluation precedence of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#precedence TeamsRule#precedence}

---

##### `devicePosture`<sup>Optional</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.devicePosture"></a>

- *Type:* java.lang.String

The wirefilter expression to be used for device_posture check matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#device_posture TeamsRule#device_posture}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicator of rule enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#enabled TeamsRule#enabled}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.filters"></a>

- *Type:* java.util.List<java.lang.String>

The protocol or layer to evaluate the traffic and identity expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#filters TeamsRule#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#id TeamsRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.identity"></a>

- *Type:* java.lang.String

The wirefilter expression to be used for identity matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#identity TeamsRule#identity}

---

##### `ruleSettings`<sup>Optional</sup> <a name="ruleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.ruleSettings"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

rule_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#rule_settings TeamsRule#rule_settings}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.traffic"></a>

- *Type:* java.lang.String

The wirefilter expression to be used for traffic matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#traffic TeamsRule#traffic}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings">putRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetDevicePosture">resetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetRuleSettings">resetRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetTraffic">resetTraffic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRuleSettings` <a name="putRuleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings"></a>

```java
public void putRuleSettings(TeamsRuleRuleSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

---

##### `resetDevicePosture` <a name="resetDevicePosture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetDevicePosture"></a>

```java
public void resetDevicePosture()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetRuleSettings` <a name="resetRuleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetRuleSettings"></a>

```java
public void resetRuleSettings()
```

##### `resetTraffic` <a name="resetTraffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetTraffic"></a>

```java
public void resetTraffic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TeamsRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRule;

TeamsRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRule;

TeamsRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRule;

TeamsRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRule;

TeamsRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TeamsRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TeamsRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TeamsRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TeamsRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TeamsRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettings">ruleSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference">TeamsRuleRuleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePostureInput">devicePostureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filtersInput">filtersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identityInput">identityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedenceInput">precedenceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettingsInput">ruleSettingsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.trafficInput">trafficInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePosture">devicePosture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filters">filters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identity">identity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.traffic">traffic</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ruleSettings`<sup>Required</sup> <a name="ruleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettings"></a>

```java
public TeamsRuleRuleSettingsOutputReference getRuleSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference">TeamsRuleRuleSettingsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `devicePostureInput`<sup>Optional</sup> <a name="devicePostureInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePostureInput"></a>

```java
public java.lang.String getDevicePostureInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filtersInput"></a>

```java
public java.util.List<java.lang.String> getFiltersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identityInput"></a>

```java
public java.lang.String getIdentityInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `precedenceInput`<sup>Optional</sup> <a name="precedenceInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedenceInput"></a>

```java
public java.lang.Number getPrecedenceInput();
```

- *Type:* java.lang.Number

---

##### `ruleSettingsInput`<sup>Optional</sup> <a name="ruleSettingsInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettingsInput"></a>

```java
public TeamsRuleRuleSettings getRuleSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

---

##### `trafficInput`<sup>Optional</sup> <a name="trafficInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.trafficInput"></a>

```java
public java.lang.String getTrafficInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `devicePosture`<sup>Required</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePosture"></a>

```java
public java.lang.String getDevicePosture();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filters"></a>

```java
public java.util.List<java.lang.String> getFilters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

---

##### `traffic`<sup>Required</sup> <a name="traffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.traffic"></a>

```java
public java.lang.String getTraffic();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TeamsRuleConfig <a name="TeamsRuleConfig" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleConfig;

TeamsRuleConfig.builder()
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
    .action(java.lang.String)
    .description(java.lang.String)
    .name(java.lang.String)
    .precedence(java.lang.Number)
//  .devicePosture(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .filters(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .identity(java.lang.String)
//  .ruleSettings(TeamsRuleRuleSettings)
//  .traffic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.action">action</a></code> | <code>java.lang.String</code> | The action executed by matched teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | The evaluation precedence of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.devicePosture">devicePosture</a></code> | <code>java.lang.String</code> | The wirefilter expression to be used for device_posture check matching. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicator of rule enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.filters">filters</a></code> | <code>java.util.List<java.lang.String></code> | The protocol or layer to evaluate the traffic and identity expressions. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#id TeamsRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.identity">identity</a></code> | <code>java.lang.String</code> | The wirefilter expression to be used for identity matching. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.ruleSettings">ruleSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a></code> | rule_settings block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.traffic">traffic</a></code> | <code>java.lang.String</code> | The wirefilter expression to be used for traffic matching. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#account_id TeamsRule#account_id}

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The action executed by matched teams rule.

Available values: `allow`, `block`, `safesearch`, `ytrestricted`, `on`, `off`, `scan`, `noscan`, `isolate`, `noisolate`, `override`, `l4_override`, `egress`, `audit_ssh`, `resolve`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#action TeamsRule#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#description TeamsRule#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#name TeamsRule#name}

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

The evaluation precedence of the teams rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#precedence TeamsRule#precedence}

---

##### `devicePosture`<sup>Optional</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.devicePosture"></a>

```java
public java.lang.String getDevicePosture();
```

- *Type:* java.lang.String

The wirefilter expression to be used for device_posture check matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#device_posture TeamsRule#device_posture}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicator of rule enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#enabled TeamsRule#enabled}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.filters"></a>

```java
public java.util.List<java.lang.String> getFilters();
```

- *Type:* java.util.List<java.lang.String>

The protocol or layer to evaluate the traffic and identity expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#filters TeamsRule#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#id TeamsRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

The wirefilter expression to be used for identity matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#identity TeamsRule#identity}

---

##### `ruleSettings`<sup>Optional</sup> <a name="ruleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.ruleSettings"></a>

```java
public TeamsRuleRuleSettings getRuleSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

rule_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#rule_settings TeamsRule#rule_settings}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.traffic"></a>

```java
public java.lang.String getTraffic();
```

- *Type:* java.lang.String

The wirefilter expression to be used for traffic matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#traffic TeamsRule#traffic}

---

### TeamsRuleRuleSettings <a name="TeamsRuleRuleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettings;

TeamsRuleRuleSettings.builder()
//  .addHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .allowChildBypass(java.lang.Boolean)
//  .allowChildBypass(IResolvable)
//  .auditSsh(TeamsRuleRuleSettingsAuditSsh)
//  .bisoAdminControls(TeamsRuleRuleSettingsBisoAdminControls)
//  .blockPageEnabled(java.lang.Boolean)
//  .blockPageEnabled(IResolvable)
//  .blockPageReason(java.lang.String)
//  .bypassParentRule(java.lang.Boolean)
//  .bypassParentRule(IResolvable)
//  .checkSession(TeamsRuleRuleSettingsCheckSession)
//  .dnsResolvers(TeamsRuleRuleSettingsDnsResolvers)
//  .egress(TeamsRuleRuleSettingsEgress)
//  .insecureDisableDnssecValidation(java.lang.Boolean)
//  .insecureDisableDnssecValidation(IResolvable)
//  .ipCategories(java.lang.Boolean)
//  .ipCategories(IResolvable)
//  .l4Override(TeamsRuleRuleSettingsL4Override)
//  .notificationSettings(TeamsRuleRuleSettingsNotificationSettings)
//  .overrideHost(java.lang.String)
//  .overrideIps(java.util.List<java.lang.String>)
//  .payloadLog(TeamsRuleRuleSettingsPayloadLog)
//  .resolveDnsThroughCloudflare(java.lang.Boolean)
//  .resolveDnsThroughCloudflare(IResolvable)
//  .untrustedCert(TeamsRuleRuleSettingsUntrustedCert)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.addHeaders">addHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Add custom headers to allowed requests in the form of key-value pairs. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.allowChildBypass">allowChildBypass</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow parent MSP accounts to enable bypass their children's rules. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.auditSsh">auditSsh</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a></code> | audit_ssh block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bisoAdminControls">bisoAdminControls</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a></code> | biso_admin_controls block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageEnabled">blockPageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicator of block page enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageReason">blockPageReason</a></code> | <code>java.lang.String</code> | The displayed reason for a user being blocked. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bypassParentRule">bypassParentRule</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow child MSP accounts to bypass their parent's rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.checkSession">checkSession</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a></code> | check_session block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.dnsResolvers">dnsResolvers</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers">TeamsRuleRuleSettingsDnsResolvers</a></code> | dns_resolvers block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a></code> | egress block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.insecureDisableDnssecValidation">insecureDisableDnssecValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable DNSSEC validation (must be Allow rule). |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.ipCategories">ipCategories</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Turns on IP category based filter on dns if the rule contains dns category checks. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.l4Override">l4Override</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a></code> | l4override block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings">TeamsRuleRuleSettingsNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideHost">overrideHost</a></code> | <code>java.lang.String</code> | The host to override matching DNS queries with. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideIps">overrideIps</a></code> | <code>java.util.List<java.lang.String></code> | The IPs to override matching DNS queries with. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.payloadLog">payloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a></code> | payload_log block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.resolveDnsThroughCloudflare">resolveDnsThroughCloudflare</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable sending queries that match the resolver policy to Cloudflare's default 1.1.1.1 DNS resolver. Cannot be set when `dns_resolvers` are specified. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.untrustedCert">untrustedCert</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a></code> | untrusted_cert block. |

---

##### `addHeaders`<sup>Optional</sup> <a name="addHeaders" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.addHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAddHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Add custom headers to allowed requests in the form of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#add_headers TeamsRule#add_headers}

---

##### `allowChildBypass`<sup>Optional</sup> <a name="allowChildBypass" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.allowChildBypass"></a>

```java
public java.lang.Object getAllowChildBypass();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow parent MSP accounts to enable bypass their children's rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#allow_child_bypass TeamsRule#allow_child_bypass}

---

##### `auditSsh`<sup>Optional</sup> <a name="auditSsh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.auditSsh"></a>

```java
public TeamsRuleRuleSettingsAuditSsh getAuditSsh();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a>

audit_ssh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#audit_ssh TeamsRule#audit_ssh}

---

##### `bisoAdminControls`<sup>Optional</sup> <a name="bisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bisoAdminControls"></a>

```java
public TeamsRuleRuleSettingsBisoAdminControls getBisoAdminControls();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

biso_admin_controls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#biso_admin_controls TeamsRule#biso_admin_controls}

---

##### `blockPageEnabled`<sup>Optional</sup> <a name="blockPageEnabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageEnabled"></a>

```java
public java.lang.Object getBlockPageEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicator of block page enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#block_page_enabled TeamsRule#block_page_enabled}

---

##### `blockPageReason`<sup>Optional</sup> <a name="blockPageReason" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageReason"></a>

```java
public java.lang.String getBlockPageReason();
```

- *Type:* java.lang.String

The displayed reason for a user being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#block_page_reason TeamsRule#block_page_reason}

---

##### `bypassParentRule`<sup>Optional</sup> <a name="bypassParentRule" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bypassParentRule"></a>

```java
public java.lang.Object getBypassParentRule();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow child MSP accounts to bypass their parent's rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#bypass_parent_rule TeamsRule#bypass_parent_rule}

---

##### `checkSession`<sup>Optional</sup> <a name="checkSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.checkSession"></a>

```java
public TeamsRuleRuleSettingsCheckSession getCheckSession();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

check_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#check_session TeamsRule#check_session}

---

##### `dnsResolvers`<sup>Optional</sup> <a name="dnsResolvers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.dnsResolvers"></a>

```java
public TeamsRuleRuleSettingsDnsResolvers getDnsResolvers();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers">TeamsRuleRuleSettingsDnsResolvers</a>

dns_resolvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#dns_resolvers TeamsRule#dns_resolvers}

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.egress"></a>

```java
public TeamsRuleRuleSettingsEgress getEgress();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#egress TeamsRule#egress}

---

##### `insecureDisableDnssecValidation`<sup>Optional</sup> <a name="insecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.insecureDisableDnssecValidation"></a>

```java
public java.lang.Object getInsecureDisableDnssecValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable DNSSEC validation (must be Allow rule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#insecure_disable_dnssec_validation TeamsRule#insecure_disable_dnssec_validation}

---

##### `ipCategories`<sup>Optional</sup> <a name="ipCategories" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.ipCategories"></a>

```java
public java.lang.Object getIpCategories();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Turns on IP category based filter on dns if the rule contains dns category checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#ip_categories TeamsRule#ip_categories}

---

##### `l4Override`<sup>Optional</sup> <a name="l4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.l4Override"></a>

```java
public TeamsRuleRuleSettingsL4Override getL4Override();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

l4override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#l4override TeamsRule#l4override}

---

##### `notificationSettings`<sup>Optional</sup> <a name="notificationSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.notificationSettings"></a>

```java
public TeamsRuleRuleSettingsNotificationSettings getNotificationSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings">TeamsRuleRuleSettingsNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#notification_settings TeamsRule#notification_settings}

---

##### `overrideHost`<sup>Optional</sup> <a name="overrideHost" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideHost"></a>

```java
public java.lang.String getOverrideHost();
```

- *Type:* java.lang.String

The host to override matching DNS queries with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#override_host TeamsRule#override_host}

---

##### `overrideIps`<sup>Optional</sup> <a name="overrideIps" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideIps"></a>

```java
public java.util.List<java.lang.String> getOverrideIps();
```

- *Type:* java.util.List<java.lang.String>

The IPs to override matching DNS queries with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#override_ips TeamsRule#override_ips}

---

##### `payloadLog`<sup>Optional</sup> <a name="payloadLog" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.payloadLog"></a>

```java
public TeamsRuleRuleSettingsPayloadLog getPayloadLog();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#payload_log TeamsRule#payload_log}

---

##### `resolveDnsThroughCloudflare`<sup>Optional</sup> <a name="resolveDnsThroughCloudflare" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.resolveDnsThroughCloudflare"></a>

```java
public java.lang.Object getResolveDnsThroughCloudflare();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable sending queries that match the resolver policy to Cloudflare's default 1.1.1.1 DNS resolver. Cannot be set when `dns_resolvers` are specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#resolve_dns_through_cloudflare TeamsRule#resolve_dns_through_cloudflare}

---

##### `untrustedCert`<sup>Optional</sup> <a name="untrustedCert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.untrustedCert"></a>

```java
public TeamsRuleRuleSettingsUntrustedCert getUntrustedCert();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a>

untrusted_cert block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#untrusted_cert TeamsRule#untrusted_cert}

---

### TeamsRuleRuleSettingsAuditSsh <a name="TeamsRuleRuleSettingsAuditSsh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsAuditSsh;

TeamsRuleRuleSettingsAuditSsh.builder()
    .commandLogging(java.lang.Boolean)
    .commandLogging(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh.property.commandLogging">commandLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Log all SSH commands. |

---

##### `commandLogging`<sup>Required</sup> <a name="commandLogging" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh.property.commandLogging"></a>

```java
public java.lang.Object getCommandLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Log all SSH commands.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#command_logging TeamsRule#command_logging}

---

### TeamsRuleRuleSettingsBisoAdminControls <a name="TeamsRuleRuleSettingsBisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsBisoAdminControls;

TeamsRuleRuleSettingsBisoAdminControls.builder()
//  .disableCopyPaste(java.lang.Boolean)
//  .disableCopyPaste(IResolvable)
//  .disableDownload(java.lang.Boolean)
//  .disableDownload(IResolvable)
//  .disableKeyboard(java.lang.Boolean)
//  .disableKeyboard(IResolvable)
//  .disablePrinting(java.lang.Boolean)
//  .disablePrinting(IResolvable)
//  .disableUpload(java.lang.Boolean)
//  .disableUpload(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableCopyPaste">disableCopyPaste</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable copy-paste. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableDownload">disableDownload</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable download. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableKeyboard">disableKeyboard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable keyboard usage. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disablePrinting">disablePrinting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable printing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableUpload">disableUpload</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable upload. |

---

##### `disableCopyPaste`<sup>Optional</sup> <a name="disableCopyPaste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableCopyPaste"></a>

```java
public java.lang.Object getDisableCopyPaste();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable copy-paste.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#disable_copy_paste TeamsRule#disable_copy_paste}

---

##### `disableDownload`<sup>Optional</sup> <a name="disableDownload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableDownload"></a>

```java
public java.lang.Object getDisableDownload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable download.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#disable_download TeamsRule#disable_download}

---

##### `disableKeyboard`<sup>Optional</sup> <a name="disableKeyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableKeyboard"></a>

```java
public java.lang.Object getDisableKeyboard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable keyboard usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#disable_keyboard TeamsRule#disable_keyboard}

---

##### `disablePrinting`<sup>Optional</sup> <a name="disablePrinting" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disablePrinting"></a>

```java
public java.lang.Object getDisablePrinting();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable printing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#disable_printing TeamsRule#disable_printing}

---

##### `disableUpload`<sup>Optional</sup> <a name="disableUpload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableUpload"></a>

```java
public java.lang.Object getDisableUpload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#disable_upload TeamsRule#disable_upload}

---

### TeamsRuleRuleSettingsCheckSession <a name="TeamsRuleRuleSettingsCheckSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsCheckSession;

TeamsRuleRuleSettingsCheckSession.builder()
    .duration(java.lang.String)
    .enforce(java.lang.Boolean)
    .enforce(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.duration">duration</a></code> | <code>java.lang.String</code> | Configure how fresh the session needs to be to be considered valid. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.enforce">enforce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable session enforcement for this rule. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Configure how fresh the session needs to be to be considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#duration TeamsRule#duration}

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.enforce"></a>

```java
public java.lang.Object getEnforce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable session enforcement for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#enforce TeamsRule#enforce}

---

### TeamsRuleRuleSettingsDnsResolvers <a name="TeamsRuleRuleSettingsDnsResolvers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsDnsResolvers;

TeamsRuleRuleSettingsDnsResolvers.builder()
//  .ipv4(IResolvable)
//  .ipv4(java.util.List<TeamsRuleRuleSettingsDnsResolversIpv4>)
//  .ipv6(IResolvable)
//  .ipv6(java.util.List<TeamsRuleRuleSettingsDnsResolversIpv6>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers.property.ipv4">ipv4</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4">TeamsRuleRuleSettingsDnsResolversIpv4</a>></code> | ipv4 block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers.property.ipv6">ipv6</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6">TeamsRuleRuleSettingsDnsResolversIpv6</a>></code> | ipv6 block. |

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers.property.ipv4"></a>

```java
public java.lang.Object getIpv4();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4">TeamsRuleRuleSettingsDnsResolversIpv4</a>>

ipv4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#ipv4 TeamsRule#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers.property.ipv6"></a>

```java
public java.lang.Object getIpv6();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6">TeamsRuleRuleSettingsDnsResolversIpv6</a>>

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#ipv6 TeamsRule#ipv6}

---

### TeamsRuleRuleSettingsDnsResolversIpv4 <a name="TeamsRuleRuleSettingsDnsResolversIpv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsDnsResolversIpv4;

TeamsRuleRuleSettingsDnsResolversIpv4.builder()
    .ip(java.lang.String)
//  .port(java.lang.Number)
//  .routeThroughPrivateNetwork(java.lang.Boolean)
//  .routeThroughPrivateNetwork(IResolvable)
//  .vnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.ip">ip</a></code> | <code>java.lang.String</code> | The IPv4 or IPv6 address of the upstream resolver. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.port">port</a></code> | <code>java.lang.Number</code> | A port number to use for the upstream resolver. Defaults to `53`. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.routeThroughPrivateNetwork">routeThroughPrivateNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to connect to this resolver over a private network. Must be set when `vnet_id` is set. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.vnetId">vnetId</a></code> | <code>java.lang.String</code> | specify a virtual network for this resolver. Uses default virtual network id if omitted. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

The IPv4 or IPv6 address of the upstream resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#ip TeamsRule#ip}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

A port number to use for the upstream resolver. Defaults to `53`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#port TeamsRule#port}

---

##### `routeThroughPrivateNetwork`<sup>Optional</sup> <a name="routeThroughPrivateNetwork" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.routeThroughPrivateNetwork"></a>

```java
public java.lang.Object getRouteThroughPrivateNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to connect to this resolver over a private network. Must be set when `vnet_id` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#route_through_private_network TeamsRule#route_through_private_network}

---

##### `vnetId`<sup>Optional</sup> <a name="vnetId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4.property.vnetId"></a>

```java
public java.lang.String getVnetId();
```

- *Type:* java.lang.String

specify a virtual network for this resolver. Uses default virtual network id if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#vnet_id TeamsRule#vnet_id}

---

### TeamsRuleRuleSettingsDnsResolversIpv6 <a name="TeamsRuleRuleSettingsDnsResolversIpv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsDnsResolversIpv6;

TeamsRuleRuleSettingsDnsResolversIpv6.builder()
    .ip(java.lang.String)
//  .port(java.lang.Number)
//  .routeThroughPrivateNetwork(java.lang.Boolean)
//  .routeThroughPrivateNetwork(IResolvable)
//  .vnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.ip">ip</a></code> | <code>java.lang.String</code> | The IPv4 or IPv6 address of the upstream resolver. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.port">port</a></code> | <code>java.lang.Number</code> | A port number to use for the upstream resolver. Defaults to `53`. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.routeThroughPrivateNetwork">routeThroughPrivateNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to connect to this resolver over a private network. Must be set when `vnet_id` is set. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.vnetId">vnetId</a></code> | <code>java.lang.String</code> | specify a virtual network for this resolver. Uses default virtual network id if omitted. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

The IPv4 or IPv6 address of the upstream resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#ip TeamsRule#ip}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

A port number to use for the upstream resolver. Defaults to `53`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#port TeamsRule#port}

---

##### `routeThroughPrivateNetwork`<sup>Optional</sup> <a name="routeThroughPrivateNetwork" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.routeThroughPrivateNetwork"></a>

```java
public java.lang.Object getRouteThroughPrivateNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to connect to this resolver over a private network. Must be set when `vnet_id` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#route_through_private_network TeamsRule#route_through_private_network}

---

##### `vnetId`<sup>Optional</sup> <a name="vnetId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6.property.vnetId"></a>

```java
public java.lang.String getVnetId();
```

- *Type:* java.lang.String

specify a virtual network for this resolver. Uses default virtual network id if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#vnet_id TeamsRule#vnet_id}

---

### TeamsRuleRuleSettingsEgress <a name="TeamsRuleRuleSettingsEgress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsEgress;

TeamsRuleRuleSettingsEgress.builder()
    .ipv4(java.lang.String)
    .ipv6(java.lang.String)
//  .ipv4Fallback(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4">ipv4</a></code> | <code>java.lang.String</code> | The IPv4 address to be used for egress. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv6">ipv6</a></code> | <code>java.lang.String</code> | The IPv6 range to be used for egress. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4Fallback">ipv4Fallback</a></code> | <code>java.lang.String</code> | The IPv4 address to be used for egress in the event of an error egressing with the primary IPv4. |

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4"></a>

```java
public java.lang.String getIpv4();
```

- *Type:* java.lang.String

The IPv4 address to be used for egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#ipv4 TeamsRule#ipv4}

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

The IPv6 range to be used for egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#ipv6 TeamsRule#ipv6}

---

##### `ipv4Fallback`<sup>Optional</sup> <a name="ipv4Fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4Fallback"></a>

```java
public java.lang.String getIpv4Fallback();
```

- *Type:* java.lang.String

The IPv4 address to be used for egress in the event of an error egressing with the primary IPv4.

Can be '0.0.0.0' to indicate local egreass via Warp IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#ipv4_fallback TeamsRule#ipv4_fallback}

---

### TeamsRuleRuleSettingsL4Override <a name="TeamsRuleRuleSettingsL4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsL4Override;

TeamsRuleRuleSettingsL4Override.builder()
    .ip(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.ip">ip</a></code> | <code>java.lang.String</code> | Override IP to forward traffic to. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.port">port</a></code> | <code>java.lang.Number</code> | Override Port to forward traffic to. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

Override IP to forward traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#ip TeamsRule#ip}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Override Port to forward traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#port TeamsRule#port}

---

### TeamsRuleRuleSettingsNotificationSettings <a name="TeamsRuleRuleSettingsNotificationSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsNotificationSettings;

TeamsRuleRuleSettingsNotificationSettings.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .message(java.lang.String)
//  .supportUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notification settings. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings.property.message">message</a></code> | <code>java.lang.String</code> | Notification content. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | Support URL to show in the notification. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notification settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#enabled TeamsRule#enabled}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#message TeamsRule#message}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

Support URL to show in the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#support_url TeamsRule#support_url}

---

### TeamsRuleRuleSettingsPayloadLog <a name="TeamsRuleRuleSettingsPayloadLog" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsPayloadLog;

TeamsRuleRuleSettingsPayloadLog.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable or disable DLP Payload Logging for this rule. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable or disable DLP Payload Logging for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#enabled TeamsRule#enabled}

---

### TeamsRuleRuleSettingsUntrustedCert <a name="TeamsRuleRuleSettingsUntrustedCert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsUntrustedCert;

TeamsRuleRuleSettingsUntrustedCert.builder()
//  .action(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert.property.action">action</a></code> | <code>java.lang.String</code> | Action to be taken when the SSL certificate of upstream is invalid. Available values: `pass_through`, `block`, `error`. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Action to be taken when the SSL certificate of upstream is invalid. Available values: `pass_through`, `block`, `error`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.37.0/docs/resources/teams_rule#action TeamsRule#action}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamsRuleRuleSettingsAuditSshOutputReference <a name="TeamsRuleRuleSettingsAuditSshOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsAuditSshOutputReference;

new TeamsRuleRuleSettingsAuditSshOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.commandLoggingInput">commandLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.commandLogging">commandLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commandLoggingInput`<sup>Optional</sup> <a name="commandLoggingInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.commandLoggingInput"></a>

```java
public java.lang.Object getCommandLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commandLogging`<sup>Required</sup> <a name="commandLogging" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.commandLogging"></a>

```java
public java.lang.Object getCommandLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference.property.internalValue"></a>

```java
public TeamsRuleRuleSettingsAuditSsh getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a>

---


### TeamsRuleRuleSettingsBisoAdminControlsOutputReference <a name="TeamsRuleRuleSettingsBisoAdminControlsOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference;

new TeamsRuleRuleSettingsBisoAdminControlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableCopyPaste">resetDisableCopyPaste</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableDownload">resetDisableDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableKeyboard">resetDisableKeyboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisablePrinting">resetDisablePrinting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableUpload">resetDisableUpload</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableCopyPaste` <a name="resetDisableCopyPaste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableCopyPaste"></a>

```java
public void resetDisableCopyPaste()
```

##### `resetDisableDownload` <a name="resetDisableDownload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableDownload"></a>

```java
public void resetDisableDownload()
```

##### `resetDisableKeyboard` <a name="resetDisableKeyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableKeyboard"></a>

```java
public void resetDisableKeyboard()
```

##### `resetDisablePrinting` <a name="resetDisablePrinting" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisablePrinting"></a>

```java
public void resetDisablePrinting()
```

##### `resetDisableUpload` <a name="resetDisableUpload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableUpload"></a>

```java
public void resetDisableUpload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPasteInput">disableCopyPasteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownloadInput">disableDownloadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboardInput">disableKeyboardInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrintingInput">disablePrintingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUploadInput">disableUploadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPaste">disableCopyPaste</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownload">disableDownload</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboard">disableKeyboard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrinting">disablePrinting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUpload">disableUpload</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableCopyPasteInput`<sup>Optional</sup> <a name="disableCopyPasteInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPasteInput"></a>

```java
public java.lang.Object getDisableCopyPasteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableDownloadInput`<sup>Optional</sup> <a name="disableDownloadInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownloadInput"></a>

```java
public java.lang.Object getDisableDownloadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableKeyboardInput`<sup>Optional</sup> <a name="disableKeyboardInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboardInput"></a>

```java
public java.lang.Object getDisableKeyboardInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disablePrintingInput`<sup>Optional</sup> <a name="disablePrintingInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrintingInput"></a>

```java
public java.lang.Object getDisablePrintingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableUploadInput`<sup>Optional</sup> <a name="disableUploadInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUploadInput"></a>

```java
public java.lang.Object getDisableUploadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableCopyPaste`<sup>Required</sup> <a name="disableCopyPaste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPaste"></a>

```java
public java.lang.Object getDisableCopyPaste();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableDownload`<sup>Required</sup> <a name="disableDownload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownload"></a>

```java
public java.lang.Object getDisableDownload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableKeyboard`<sup>Required</sup> <a name="disableKeyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboard"></a>

```java
public java.lang.Object getDisableKeyboard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disablePrinting`<sup>Required</sup> <a name="disablePrinting" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrinting"></a>

```java
public java.lang.Object getDisablePrinting();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableUpload`<sup>Required</sup> <a name="disableUpload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUpload"></a>

```java
public java.lang.Object getDisableUpload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.internalValue"></a>

```java
public TeamsRuleRuleSettingsBisoAdminControls getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

---


### TeamsRuleRuleSettingsCheckSessionOutputReference <a name="TeamsRuleRuleSettingsCheckSessionOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsCheckSessionOutputReference;

new TeamsRuleRuleSettingsCheckSessionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforceInput">enforceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforce">enforce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `enforceInput`<sup>Optional</sup> <a name="enforceInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforceInput"></a>

```java
public java.lang.Object getEnforceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforce"></a>

```java
public java.lang.Object getEnforce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.internalValue"></a>

```java
public TeamsRuleRuleSettingsCheckSession getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

---


### TeamsRuleRuleSettingsDnsResolversIpv4List <a name="TeamsRuleRuleSettingsDnsResolversIpv4List" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsDnsResolversIpv4List;

new TeamsRuleRuleSettingsDnsResolversIpv4List(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.get"></a>

```java
public TeamsRuleRuleSettingsDnsResolversIpv4OutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4">TeamsRuleRuleSettingsDnsResolversIpv4</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4">TeamsRuleRuleSettingsDnsResolversIpv4</a>>

---


### TeamsRuleRuleSettingsDnsResolversIpv4OutputReference <a name="TeamsRuleRuleSettingsDnsResolversIpv4OutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference;

new TeamsRuleRuleSettingsDnsResolversIpv4OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resetRouteThroughPrivateNetwork">resetRouteThroughPrivateNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resetVnetId">resetVnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetRouteThroughPrivateNetwork` <a name="resetRouteThroughPrivateNetwork" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resetRouteThroughPrivateNetwork"></a>

```java
public void resetRouteThroughPrivateNetwork()
```

##### `resetVnetId` <a name="resetVnetId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.resetVnetId"></a>

```java
public void resetVnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetworkInput">routeThroughPrivateNetworkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.vnetIdInput">vnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetwork">routeThroughPrivateNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.vnetId">vnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4">TeamsRuleRuleSettingsDnsResolversIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `routeThroughPrivateNetworkInput`<sup>Optional</sup> <a name="routeThroughPrivateNetworkInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetworkInput"></a>

```java
public java.lang.Object getRouteThroughPrivateNetworkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetIdInput`<sup>Optional</sup> <a name="vnetIdInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.vnetIdInput"></a>

```java
public java.lang.String getVnetIdInput();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `routeThroughPrivateNetwork`<sup>Required</sup> <a name="routeThroughPrivateNetwork" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.routeThroughPrivateNetwork"></a>

```java
public java.lang.Object getRouteThroughPrivateNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetId`<sup>Required</sup> <a name="vnetId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.vnetId"></a>

```java
public java.lang.String getVnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4">TeamsRuleRuleSettingsDnsResolversIpv4</a>

---


### TeamsRuleRuleSettingsDnsResolversIpv6List <a name="TeamsRuleRuleSettingsDnsResolversIpv6List" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsDnsResolversIpv6List;

new TeamsRuleRuleSettingsDnsResolversIpv6List(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.get"></a>

```java
public TeamsRuleRuleSettingsDnsResolversIpv6OutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6">TeamsRuleRuleSettingsDnsResolversIpv6</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6">TeamsRuleRuleSettingsDnsResolversIpv6</a>>

---


### TeamsRuleRuleSettingsDnsResolversIpv6OutputReference <a name="TeamsRuleRuleSettingsDnsResolversIpv6OutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference;

new TeamsRuleRuleSettingsDnsResolversIpv6OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resetRouteThroughPrivateNetwork">resetRouteThroughPrivateNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resetVnetId">resetVnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetRouteThroughPrivateNetwork` <a name="resetRouteThroughPrivateNetwork" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resetRouteThroughPrivateNetwork"></a>

```java
public void resetRouteThroughPrivateNetwork()
```

##### `resetVnetId` <a name="resetVnetId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.resetVnetId"></a>

```java
public void resetVnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetworkInput">routeThroughPrivateNetworkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.vnetIdInput">vnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetwork">routeThroughPrivateNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.vnetId">vnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6">TeamsRuleRuleSettingsDnsResolversIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `routeThroughPrivateNetworkInput`<sup>Optional</sup> <a name="routeThroughPrivateNetworkInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetworkInput"></a>

```java
public java.lang.Object getRouteThroughPrivateNetworkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetIdInput`<sup>Optional</sup> <a name="vnetIdInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.vnetIdInput"></a>

```java
public java.lang.String getVnetIdInput();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `routeThroughPrivateNetwork`<sup>Required</sup> <a name="routeThroughPrivateNetwork" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.routeThroughPrivateNetwork"></a>

```java
public java.lang.Object getRouteThroughPrivateNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnetId`<sup>Required</sup> <a name="vnetId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.vnetId"></a>

```java
public java.lang.String getVnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6">TeamsRuleRuleSettingsDnsResolversIpv6</a>

---


### TeamsRuleRuleSettingsDnsResolversOutputReference <a name="TeamsRuleRuleSettingsDnsResolversOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsDnsResolversOutputReference;

new TeamsRuleRuleSettingsDnsResolversOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.putIpv4">putIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.putIpv6">putIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpv4` <a name="putIpv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.putIpv4"></a>

```java
public void putIpv4(IResolvable OR java.util.List<TeamsRuleRuleSettingsDnsResolversIpv4> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.putIpv4.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4">TeamsRuleRuleSettingsDnsResolversIpv4</a>>

---

##### `putIpv6` <a name="putIpv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.putIpv6"></a>

```java
public void putIpv6(IResolvable OR java.util.List<TeamsRuleRuleSettingsDnsResolversIpv6> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.putIpv6.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6">TeamsRuleRuleSettingsDnsResolversIpv6</a>>

---

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.resetIpv4"></a>

```java
public void resetIpv4()
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.resetIpv6"></a>

```java
public void resetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List">TeamsRuleRuleSettingsDnsResolversIpv4List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List">TeamsRuleRuleSettingsDnsResolversIpv6List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv4Input">ipv4Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4">TeamsRuleRuleSettingsDnsResolversIpv4</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6">TeamsRuleRuleSettingsDnsResolversIpv6</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers">TeamsRuleRuleSettingsDnsResolvers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv4"></a>

```java
public TeamsRuleRuleSettingsDnsResolversIpv4List getIpv4();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4List">TeamsRuleRuleSettingsDnsResolversIpv4List</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv6"></a>

```java
public TeamsRuleRuleSettingsDnsResolversIpv6List getIpv6();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6List">TeamsRuleRuleSettingsDnsResolversIpv6List</a>

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv4Input"></a>

```java
public java.lang.Object getIpv4Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv4">TeamsRuleRuleSettingsDnsResolversIpv4</a>>

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.ipv6Input"></a>

```java
public java.lang.Object getIpv6Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversIpv6">TeamsRuleRuleSettingsDnsResolversIpv6</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference.property.internalValue"></a>

```java
public TeamsRuleRuleSettingsDnsResolvers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers">TeamsRuleRuleSettingsDnsResolvers</a>

---


### TeamsRuleRuleSettingsEgressOutputReference <a name="TeamsRuleRuleSettingsEgressOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsEgressOutputReference;

new TeamsRuleRuleSettingsEgressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resetIpv4Fallback">resetIpv4Fallback</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv4Fallback` <a name="resetIpv4Fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resetIpv4Fallback"></a>

```java
public void resetIpv4Fallback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4FallbackInput">ipv4FallbackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Input">ipv4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4">ipv4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Fallback">ipv4Fallback</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6">ipv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv4FallbackInput`<sup>Optional</sup> <a name="ipv4FallbackInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4FallbackInput"></a>

```java
public java.lang.String getIpv4FallbackInput();
```

- *Type:* java.lang.String

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Input"></a>

```java
public java.lang.String getIpv4Input();
```

- *Type:* java.lang.String

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6Input"></a>

```java
public java.lang.String getIpv6Input();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4"></a>

```java
public java.lang.String getIpv4();
```

- *Type:* java.lang.String

---

##### `ipv4Fallback`<sup>Required</sup> <a name="ipv4Fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Fallback"></a>

```java
public java.lang.String getIpv4Fallback();
```

- *Type:* java.lang.String

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.internalValue"></a>

```java
public TeamsRuleRuleSettingsEgress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

---


### TeamsRuleRuleSettingsL4OverrideOutputReference <a name="TeamsRuleRuleSettingsL4OverrideOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsL4OverrideOutputReference;

new TeamsRuleRuleSettingsL4OverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.internalValue"></a>

```java
public TeamsRuleRuleSettingsL4Override getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

---


### TeamsRuleRuleSettingsNotificationSettingsOutputReference <a name="TeamsRuleRuleSettingsNotificationSettingsOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsNotificationSettingsOutputReference;

new TeamsRuleRuleSettingsNotificationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.resetSupportUrl"></a>

```java
public void resetSupportUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.supportUrlInput">supportUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings">TeamsRuleRuleSettingsNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.supportUrlInput"></a>

```java
public java.lang.String getSupportUrlInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference.property.internalValue"></a>

```java
public TeamsRuleRuleSettingsNotificationSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings">TeamsRuleRuleSettingsNotificationSettings</a>

---


### TeamsRuleRuleSettingsOutputReference <a name="TeamsRuleRuleSettingsOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsOutputReference;

new TeamsRuleRuleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putAuditSsh">putAuditSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls">putBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putCheckSession">putCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putDnsResolvers">putDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putEgress">putEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putL4Override">putL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putNotificationSettings">putNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putPayloadLog">putPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putUntrustedCert">putUntrustedCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAddHeaders">resetAddHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAllowChildBypass">resetAllowChildBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAuditSsh">resetAuditSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBisoAdminControls">resetBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageEnabled">resetBlockPageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageReason">resetBlockPageReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBypassParentRule">resetBypassParentRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetCheckSession">resetCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetDnsResolvers">resetDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetInsecureDisableDnssecValidation">resetInsecureDisableDnssecValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetIpCategories">resetIpCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetL4Override">resetL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetNotificationSettings">resetNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideHost">resetOverrideHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideIps">resetOverrideIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetPayloadLog">resetPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetResolveDnsThroughCloudflare">resetResolveDnsThroughCloudflare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetUntrustedCert">resetUntrustedCert</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuditSsh` <a name="putAuditSsh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putAuditSsh"></a>

```java
public void putAuditSsh(TeamsRuleRuleSettingsAuditSsh value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putAuditSsh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a>

---

##### `putBisoAdminControls` <a name="putBisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls"></a>

```java
public void putBisoAdminControls(TeamsRuleRuleSettingsBisoAdminControls value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

---

##### `putCheckSession` <a name="putCheckSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putCheckSession"></a>

```java
public void putCheckSession(TeamsRuleRuleSettingsCheckSession value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putCheckSession.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

---

##### `putDnsResolvers` <a name="putDnsResolvers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putDnsResolvers"></a>

```java
public void putDnsResolvers(TeamsRuleRuleSettingsDnsResolvers value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putDnsResolvers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers">TeamsRuleRuleSettingsDnsResolvers</a>

---

##### `putEgress` <a name="putEgress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putEgress"></a>

```java
public void putEgress(TeamsRuleRuleSettingsEgress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putEgress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

---

##### `putL4Override` <a name="putL4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putL4Override"></a>

```java
public void putL4Override(TeamsRuleRuleSettingsL4Override value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putL4Override.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

---

##### `putNotificationSettings` <a name="putNotificationSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putNotificationSettings"></a>

```java
public void putNotificationSettings(TeamsRuleRuleSettingsNotificationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings">TeamsRuleRuleSettingsNotificationSettings</a>

---

##### `putPayloadLog` <a name="putPayloadLog" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putPayloadLog"></a>

```java
public void putPayloadLog(TeamsRuleRuleSettingsPayloadLog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putPayloadLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a>

---

##### `putUntrustedCert` <a name="putUntrustedCert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putUntrustedCert"></a>

```java
public void putUntrustedCert(TeamsRuleRuleSettingsUntrustedCert value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putUntrustedCert.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a>

---

##### `resetAddHeaders` <a name="resetAddHeaders" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAddHeaders"></a>

```java
public void resetAddHeaders()
```

##### `resetAllowChildBypass` <a name="resetAllowChildBypass" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAllowChildBypass"></a>

```java
public void resetAllowChildBypass()
```

##### `resetAuditSsh` <a name="resetAuditSsh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAuditSsh"></a>

```java
public void resetAuditSsh()
```

##### `resetBisoAdminControls` <a name="resetBisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBisoAdminControls"></a>

```java
public void resetBisoAdminControls()
```

##### `resetBlockPageEnabled` <a name="resetBlockPageEnabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageEnabled"></a>

```java
public void resetBlockPageEnabled()
```

##### `resetBlockPageReason` <a name="resetBlockPageReason" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageReason"></a>

```java
public void resetBlockPageReason()
```

##### `resetBypassParentRule` <a name="resetBypassParentRule" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBypassParentRule"></a>

```java
public void resetBypassParentRule()
```

##### `resetCheckSession` <a name="resetCheckSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetCheckSession"></a>

```java
public void resetCheckSession()
```

##### `resetDnsResolvers` <a name="resetDnsResolvers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetDnsResolvers"></a>

```java
public void resetDnsResolvers()
```

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetEgress"></a>

```java
public void resetEgress()
```

##### `resetInsecureDisableDnssecValidation` <a name="resetInsecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetInsecureDisableDnssecValidation"></a>

```java
public void resetInsecureDisableDnssecValidation()
```

##### `resetIpCategories` <a name="resetIpCategories" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetIpCategories"></a>

```java
public void resetIpCategories()
```

##### `resetL4Override` <a name="resetL4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetL4Override"></a>

```java
public void resetL4Override()
```

##### `resetNotificationSettings` <a name="resetNotificationSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetNotificationSettings"></a>

```java
public void resetNotificationSettings()
```

##### `resetOverrideHost` <a name="resetOverrideHost" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideHost"></a>

```java
public void resetOverrideHost()
```

##### `resetOverrideIps` <a name="resetOverrideIps" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideIps"></a>

```java
public void resetOverrideIps()
```

##### `resetPayloadLog` <a name="resetPayloadLog" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetPayloadLog"></a>

```java
public void resetPayloadLog()
```

##### `resetResolveDnsThroughCloudflare` <a name="resetResolveDnsThroughCloudflare" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetResolveDnsThroughCloudflare"></a>

```java
public void resetResolveDnsThroughCloudflare()
```

##### `resetUntrustedCert` <a name="resetUntrustedCert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetUntrustedCert"></a>

```java
public void resetUntrustedCert()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.auditSsh">auditSsh</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference">TeamsRuleRuleSettingsAuditSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControls">bisoAdminControls</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference">TeamsRuleRuleSettingsBisoAdminControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSession">checkSession</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference">TeamsRuleRuleSettingsCheckSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.dnsResolvers">dnsResolvers</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference">TeamsRuleRuleSettingsDnsResolversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference">TeamsRuleRuleSettingsEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4Override">l4Override</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference">TeamsRuleRuleSettingsL4OverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference">TeamsRuleRuleSettingsNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.payloadLog">payloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference">TeamsRuleRuleSettingsPayloadLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.untrustedCert">untrustedCert</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference">TeamsRuleRuleSettingsUntrustedCertOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeadersInput">addHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.allowChildBypassInput">allowChildBypassInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.auditSshInput">auditSshInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControlsInput">bisoAdminControlsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabledInput">blockPageEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReasonInput">blockPageReasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bypassParentRuleInput">bypassParentRuleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSessionInput">checkSessionInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.dnsResolversInput">dnsResolversInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers">TeamsRuleRuleSettingsDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egressInput">egressInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidationInput">insecureDisableDnssecValidationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ipCategoriesInput">ipCategoriesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4OverrideInput">l4OverrideInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.notificationSettingsInput">notificationSettingsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings">TeamsRuleRuleSettingsNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHostInput">overrideHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIpsInput">overrideIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.payloadLogInput">payloadLogInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.resolveDnsThroughCloudflareInput">resolveDnsThroughCloudflareInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.untrustedCertInput">untrustedCertInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeaders">addHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.allowChildBypass">allowChildBypass</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabled">blockPageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReason">blockPageReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bypassParentRule">bypassParentRule</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidation">insecureDisableDnssecValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ipCategories">ipCategories</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHost">overrideHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIps">overrideIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.resolveDnsThroughCloudflare">resolveDnsThroughCloudflare</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditSsh`<sup>Required</sup> <a name="auditSsh" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.auditSsh"></a>

```java
public TeamsRuleRuleSettingsAuditSshOutputReference getAuditSsh();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSshOutputReference">TeamsRuleRuleSettingsAuditSshOutputReference</a>

---

##### `bisoAdminControls`<sup>Required</sup> <a name="bisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControls"></a>

```java
public TeamsRuleRuleSettingsBisoAdminControlsOutputReference getBisoAdminControls();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference">TeamsRuleRuleSettingsBisoAdminControlsOutputReference</a>

---

##### `checkSession`<sup>Required</sup> <a name="checkSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSession"></a>

```java
public TeamsRuleRuleSettingsCheckSessionOutputReference getCheckSession();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference">TeamsRuleRuleSettingsCheckSessionOutputReference</a>

---

##### `dnsResolvers`<sup>Required</sup> <a name="dnsResolvers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.dnsResolvers"></a>

```java
public TeamsRuleRuleSettingsDnsResolversOutputReference getDnsResolvers();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolversOutputReference">TeamsRuleRuleSettingsDnsResolversOutputReference</a>

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egress"></a>

```java
public TeamsRuleRuleSettingsEgressOutputReference getEgress();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference">TeamsRuleRuleSettingsEgressOutputReference</a>

---

##### `l4Override`<sup>Required</sup> <a name="l4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4Override"></a>

```java
public TeamsRuleRuleSettingsL4OverrideOutputReference getL4Override();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference">TeamsRuleRuleSettingsL4OverrideOutputReference</a>

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.notificationSettings"></a>

```java
public TeamsRuleRuleSettingsNotificationSettingsOutputReference getNotificationSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettingsOutputReference">TeamsRuleRuleSettingsNotificationSettingsOutputReference</a>

---

##### `payloadLog`<sup>Required</sup> <a name="payloadLog" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.payloadLog"></a>

```java
public TeamsRuleRuleSettingsPayloadLogOutputReference getPayloadLog();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference">TeamsRuleRuleSettingsPayloadLogOutputReference</a>

---

##### `untrustedCert`<sup>Required</sup> <a name="untrustedCert" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.untrustedCert"></a>

```java
public TeamsRuleRuleSettingsUntrustedCertOutputReference getUntrustedCert();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference">TeamsRuleRuleSettingsUntrustedCertOutputReference</a>

---

##### `addHeadersInput`<sup>Optional</sup> <a name="addHeadersInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAddHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `allowChildBypassInput`<sup>Optional</sup> <a name="allowChildBypassInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.allowChildBypassInput"></a>

```java
public java.lang.Object getAllowChildBypassInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `auditSshInput`<sup>Optional</sup> <a name="auditSshInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.auditSshInput"></a>

```java
public TeamsRuleRuleSettingsAuditSsh getAuditSshInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsAuditSsh">TeamsRuleRuleSettingsAuditSsh</a>

---

##### `bisoAdminControlsInput`<sup>Optional</sup> <a name="bisoAdminControlsInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControlsInput"></a>

```java
public TeamsRuleRuleSettingsBisoAdminControls getBisoAdminControlsInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

---

##### `blockPageEnabledInput`<sup>Optional</sup> <a name="blockPageEnabledInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabledInput"></a>

```java
public java.lang.Object getBlockPageEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockPageReasonInput`<sup>Optional</sup> <a name="blockPageReasonInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReasonInput"></a>

```java
public java.lang.String getBlockPageReasonInput();
```

- *Type:* java.lang.String

---

##### `bypassParentRuleInput`<sup>Optional</sup> <a name="bypassParentRuleInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bypassParentRuleInput"></a>

```java
public java.lang.Object getBypassParentRuleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `checkSessionInput`<sup>Optional</sup> <a name="checkSessionInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSessionInput"></a>

```java
public TeamsRuleRuleSettingsCheckSession getCheckSessionInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

---

##### `dnsResolversInput`<sup>Optional</sup> <a name="dnsResolversInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.dnsResolversInput"></a>

```java
public TeamsRuleRuleSettingsDnsResolvers getDnsResolversInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsDnsResolvers">TeamsRuleRuleSettingsDnsResolvers</a>

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egressInput"></a>

```java
public TeamsRuleRuleSettingsEgress getEgressInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

---

##### `insecureDisableDnssecValidationInput`<sup>Optional</sup> <a name="insecureDisableDnssecValidationInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidationInput"></a>

```java
public java.lang.Object getInsecureDisableDnssecValidationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipCategoriesInput`<sup>Optional</sup> <a name="ipCategoriesInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ipCategoriesInput"></a>

```java
public java.lang.Object getIpCategoriesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `l4OverrideInput`<sup>Optional</sup> <a name="l4OverrideInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4OverrideInput"></a>

```java
public TeamsRuleRuleSettingsL4Override getL4OverrideInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

---

##### `notificationSettingsInput`<sup>Optional</sup> <a name="notificationSettingsInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.notificationSettingsInput"></a>

```java
public TeamsRuleRuleSettingsNotificationSettings getNotificationSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsNotificationSettings">TeamsRuleRuleSettingsNotificationSettings</a>

---

##### `overrideHostInput`<sup>Optional</sup> <a name="overrideHostInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHostInput"></a>

```java
public java.lang.String getOverrideHostInput();
```

- *Type:* java.lang.String

---

##### `overrideIpsInput`<sup>Optional</sup> <a name="overrideIpsInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIpsInput"></a>

```java
public java.util.List<java.lang.String> getOverrideIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `payloadLogInput`<sup>Optional</sup> <a name="payloadLogInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.payloadLogInput"></a>

```java
public TeamsRuleRuleSettingsPayloadLog getPayloadLogInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a>

---

##### `resolveDnsThroughCloudflareInput`<sup>Optional</sup> <a name="resolveDnsThroughCloudflareInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.resolveDnsThroughCloudflareInput"></a>

```java
public java.lang.Object getResolveDnsThroughCloudflareInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `untrustedCertInput`<sup>Optional</sup> <a name="untrustedCertInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.untrustedCertInput"></a>

```java
public TeamsRuleRuleSettingsUntrustedCert getUntrustedCertInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a>

---

##### `addHeaders`<sup>Required</sup> <a name="addHeaders" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAddHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `allowChildBypass`<sup>Required</sup> <a name="allowChildBypass" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.allowChildBypass"></a>

```java
public java.lang.Object getAllowChildBypass();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockPageEnabled`<sup>Required</sup> <a name="blockPageEnabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabled"></a>

```java
public java.lang.Object getBlockPageEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockPageReason`<sup>Required</sup> <a name="blockPageReason" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReason"></a>

```java
public java.lang.String getBlockPageReason();
```

- *Type:* java.lang.String

---

##### `bypassParentRule`<sup>Required</sup> <a name="bypassParentRule" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bypassParentRule"></a>

```java
public java.lang.Object getBypassParentRule();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `insecureDisableDnssecValidation`<sup>Required</sup> <a name="insecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidation"></a>

```java
public java.lang.Object getInsecureDisableDnssecValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipCategories`<sup>Required</sup> <a name="ipCategories" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.ipCategories"></a>

```java
public java.lang.Object getIpCategories();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `overrideHost`<sup>Required</sup> <a name="overrideHost" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHost"></a>

```java
public java.lang.String getOverrideHost();
```

- *Type:* java.lang.String

---

##### `overrideIps`<sup>Required</sup> <a name="overrideIps" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIps"></a>

```java
public java.util.List<java.lang.String> getOverrideIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resolveDnsThroughCloudflare`<sup>Required</sup> <a name="resolveDnsThroughCloudflare" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.resolveDnsThroughCloudflare"></a>

```java
public java.lang.Object getResolveDnsThroughCloudflare();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.internalValue"></a>

```java
public TeamsRuleRuleSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

---


### TeamsRuleRuleSettingsPayloadLogOutputReference <a name="TeamsRuleRuleSettingsPayloadLogOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsPayloadLogOutputReference;

new TeamsRuleRuleSettingsPayloadLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLogOutputReference.property.internalValue"></a>

```java
public TeamsRuleRuleSettingsPayloadLog getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsPayloadLog">TeamsRuleRuleSettingsPayloadLog</a>

---


### TeamsRuleRuleSettingsUntrustedCertOutputReference <a name="TeamsRuleRuleSettingsUntrustedCertOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettingsUntrustedCertOutputReference;

new TeamsRuleRuleSettingsUntrustedCertOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.resetAction">resetAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.resetAction"></a>

```java
public void resetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCertOutputReference.property.internalValue"></a>

```java
public TeamsRuleRuleSettingsUntrustedCert getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsUntrustedCert">TeamsRuleRuleSettingsUntrustedCert</a>

---



