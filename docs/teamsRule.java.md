# `cloudflare_teams_rule`

Refer to the Terraform Registory for docs: [`cloudflare_teams_rule`](https://www.terraform.io/docs/providers/cloudflare/r/teams_rule).

# `teamsRule` Submodule <a name="`teamsRule` Submodule" id="@cdktf/provider-cloudflare.teamsRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamsRule <a name="TeamsRule" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule cloudflare_teams_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRule;

TeamsRule.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#id TeamsRule#id}. |
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

- *Type:* java.lang.Number

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#account_id TeamsRule#account_id}

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.action"></a>

- *Type:* java.lang.String

The action executed by matched teams rule.

Available values: `allow`, `block`, `safesearch`, `ytrestricted`, `on`, `off`, `scan`, `noscan`, `isolate`, `noisolate`, `override`, `l4_override`, `egress`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#action TeamsRule#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the teams rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#description TeamsRule#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the teams rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#name TeamsRule#name}

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.precedence"></a>

- *Type:* java.lang.Number

The evaluation precedence of the teams rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#precedence TeamsRule#precedence}

---

##### `devicePosture`<sup>Optional</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.devicePosture"></a>

- *Type:* java.lang.String

The wirefilter expression to be used for device_posture check matching.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#device_posture TeamsRule#device_posture}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicator of rule enablement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#enabled TeamsRule#enabled}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.filters"></a>

- *Type:* java.util.List<java.lang.String>

The protocol or layer to evaluate the traffic and identity expressions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#filters TeamsRule#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#id TeamsRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.identity"></a>

- *Type:* java.lang.String

The wirefilter expression to be used for identity matching.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#identity TeamsRule#identity}

---

##### `ruleSettings`<sup>Optional</sup> <a name="ruleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.ruleSettings"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

rule_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#rule_settings TeamsRule#rule_settings}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.traffic"></a>

- *Type:* java.lang.String

The wirefilter expression to be used for traffic matching.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#traffic TeamsRule#traffic}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
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

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

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

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
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
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

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
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#id TeamsRule#id}. |
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
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#account_id TeamsRule#account_id}

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The action executed by matched teams rule.

Available values: `allow`, `block`, `safesearch`, `ytrestricted`, `on`, `off`, `scan`, `noscan`, `isolate`, `noisolate`, `override`, `l4_override`, `egress`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#action TeamsRule#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the teams rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#description TeamsRule#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the teams rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#name TeamsRule#name}

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

The evaluation precedence of the teams rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#precedence TeamsRule#precedence}

---

##### `devicePosture`<sup>Optional</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.devicePosture"></a>

```java
public java.lang.String getDevicePosture();
```

- *Type:* java.lang.String

The wirefilter expression to be used for device_posture check matching.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#device_posture TeamsRule#device_posture}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicator of rule enablement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#enabled TeamsRule#enabled}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.filters"></a>

```java
public java.util.List<java.lang.String> getFilters();
```

- *Type:* java.util.List<java.lang.String>

The protocol or layer to evaluate the traffic and identity expressions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#filters TeamsRule#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#id TeamsRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

The wirefilter expression to be used for identity matching.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#identity TeamsRule#identity}

---

##### `ruleSettings`<sup>Optional</sup> <a name="ruleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.ruleSettings"></a>

```java
public TeamsRuleRuleSettings getRuleSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

rule_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#rule_settings TeamsRule#rule_settings}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.traffic"></a>

```java
public java.lang.String getTraffic();
```

- *Type:* java.lang.String

The wirefilter expression to be used for traffic matching.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#traffic TeamsRule#traffic}

---

### TeamsRuleRuleSettings <a name="TeamsRuleRuleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.teams_rule.TeamsRuleRuleSettings;

TeamsRuleRuleSettings.builder()
//  .addHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .bisoAdminControls(TeamsRuleRuleSettingsBisoAdminControls)
//  .blockPageEnabled(java.lang.Boolean)
//  .blockPageEnabled(IResolvable)
//  .blockPageReason(java.lang.String)
//  .checkSession(TeamsRuleRuleSettingsCheckSession)
//  .egress(TeamsRuleRuleSettingsEgress)
//  .insecureDisableDnssecValidation(java.lang.Boolean)
//  .insecureDisableDnssecValidation(IResolvable)
//  .l4Override(TeamsRuleRuleSettingsL4Override)
//  .overrideHost(java.lang.String)
//  .overrideIps(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.addHeaders">addHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Add custom headers to allowed requests in the form of key-value pairs. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bisoAdminControls">bisoAdminControls</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a></code> | biso_admin_controls block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageEnabled">blockPageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicator of block page enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageReason">blockPageReason</a></code> | <code>java.lang.String</code> | The displayed reason for a user being blocked. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.checkSession">checkSession</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a></code> | check_session block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a></code> | egress block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.insecureDisableDnssecValidation">insecureDisableDnssecValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable DNSSEC validation (must be Allow rule). |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.l4Override">l4Override</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a></code> | l4override block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideHost">overrideHost</a></code> | <code>java.lang.String</code> | The host to override matching DNS queries with. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideIps">overrideIps</a></code> | <code>java.util.List<java.lang.String></code> | The IPs to override matching DNS queries with. |

---

##### `addHeaders`<sup>Optional</sup> <a name="addHeaders" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.addHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAddHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Add custom headers to allowed requests in the form of key-value pairs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#add_headers TeamsRule#add_headers}

---

##### `bisoAdminControls`<sup>Optional</sup> <a name="bisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bisoAdminControls"></a>

```java
public TeamsRuleRuleSettingsBisoAdminControls getBisoAdminControls();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

biso_admin_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#biso_admin_controls TeamsRule#biso_admin_controls}

---

##### `blockPageEnabled`<sup>Optional</sup> <a name="blockPageEnabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageEnabled"></a>

```java
public java.lang.Object getBlockPageEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicator of block page enablement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#block_page_enabled TeamsRule#block_page_enabled}

---

##### `blockPageReason`<sup>Optional</sup> <a name="blockPageReason" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageReason"></a>

```java
public java.lang.String getBlockPageReason();
```

- *Type:* java.lang.String

The displayed reason for a user being blocked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#block_page_reason TeamsRule#block_page_reason}

---

##### `checkSession`<sup>Optional</sup> <a name="checkSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.checkSession"></a>

```java
public TeamsRuleRuleSettingsCheckSession getCheckSession();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

check_session block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#check_session TeamsRule#check_session}

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.egress"></a>

```java
public TeamsRuleRuleSettingsEgress getEgress();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

egress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#egress TeamsRule#egress}

---

##### `insecureDisableDnssecValidation`<sup>Optional</sup> <a name="insecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.insecureDisableDnssecValidation"></a>

```java
public java.lang.Object getInsecureDisableDnssecValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable DNSSEC validation (must be Allow rule).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#insecure_disable_dnssec_validation TeamsRule#insecure_disable_dnssec_validation}

---

##### `l4Override`<sup>Optional</sup> <a name="l4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.l4Override"></a>

```java
public TeamsRuleRuleSettingsL4Override getL4Override();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

l4override block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#l4override TeamsRule#l4override}

---

##### `overrideHost`<sup>Optional</sup> <a name="overrideHost" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideHost"></a>

```java
public java.lang.String getOverrideHost();
```

- *Type:* java.lang.String

The host to override matching DNS queries with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#override_host TeamsRule#override_host}

---

##### `overrideIps`<sup>Optional</sup> <a name="overrideIps" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideIps"></a>

```java
public java.util.List<java.lang.String> getOverrideIps();
```

- *Type:* java.util.List<java.lang.String>

The IPs to override matching DNS queries with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#override_ips TeamsRule#override_ips}

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#disable_copy_paste TeamsRule#disable_copy_paste}

---

##### `disableDownload`<sup>Optional</sup> <a name="disableDownload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableDownload"></a>

```java
public java.lang.Object getDisableDownload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable download.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#disable_download TeamsRule#disable_download}

---

##### `disableKeyboard`<sup>Optional</sup> <a name="disableKeyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableKeyboard"></a>

```java
public java.lang.Object getDisableKeyboard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable keyboard usage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#disable_keyboard TeamsRule#disable_keyboard}

---

##### `disablePrinting`<sup>Optional</sup> <a name="disablePrinting" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disablePrinting"></a>

```java
public java.lang.Object getDisablePrinting();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable printing.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#disable_printing TeamsRule#disable_printing}

---

##### `disableUpload`<sup>Optional</sup> <a name="disableUpload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableUpload"></a>

```java
public java.lang.Object getDisableUpload();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable upload.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#disable_upload TeamsRule#disable_upload}

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#duration TeamsRule#duration}

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.enforce"></a>

```java
public java.lang.Object getEnforce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable session enforcement for this rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#enforce TeamsRule#enforce}

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#ipv4 TeamsRule#ipv4}

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv6"></a>

```java
public java.lang.String getIpv6();
```

- *Type:* java.lang.String

The IPv6 range to be used for egress.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#ipv6 TeamsRule#ipv6}

---

##### `ipv4Fallback`<sup>Optional</sup> <a name="ipv4Fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4Fallback"></a>

```java
public java.lang.String getIpv4Fallback();
```

- *Type:* java.lang.String

The IPv4 address to be used for egress in the event of an error egressing with the primary IPv4.

Can be '0.0.0.0' to indicate local egreass via Warp IPs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#ipv4_fallback TeamsRule#ipv4_fallback}

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#ip TeamsRule#ip}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Override Port to forward traffic to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#port TeamsRule#port}

---

## Classes <a name="Classes" id="Classes"></a>

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
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls">putBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putCheckSession">putCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putEgress">putEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putL4Override">putL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAddHeaders">resetAddHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBisoAdminControls">resetBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageEnabled">resetBlockPageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageReason">resetBlockPageReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetCheckSession">resetCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetInsecureDisableDnssecValidation">resetInsecureDisableDnssecValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetL4Override">resetL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideHost">resetOverrideHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideIps">resetOverrideIps</a></code> | *No description.* |

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

##### `resetAddHeaders` <a name="resetAddHeaders" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAddHeaders"></a>

```java
public void resetAddHeaders()
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

##### `resetCheckSession` <a name="resetCheckSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetCheckSession"></a>

```java
public void resetCheckSession()
```

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetEgress"></a>

```java
public void resetEgress()
```

##### `resetInsecureDisableDnssecValidation` <a name="resetInsecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetInsecureDisableDnssecValidation"></a>

```java
public void resetInsecureDisableDnssecValidation()
```

##### `resetL4Override` <a name="resetL4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetL4Override"></a>

```java
public void resetL4Override()
```

##### `resetOverrideHost` <a name="resetOverrideHost" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideHost"></a>

```java
public void resetOverrideHost()
```

##### `resetOverrideIps` <a name="resetOverrideIps" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideIps"></a>

```java
public void resetOverrideIps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControls">bisoAdminControls</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference">TeamsRuleRuleSettingsBisoAdminControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSession">checkSession</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference">TeamsRuleRuleSettingsCheckSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference">TeamsRuleRuleSettingsEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4Override">l4Override</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference">TeamsRuleRuleSettingsL4OverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeadersInput">addHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControlsInput">bisoAdminControlsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabledInput">blockPageEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReasonInput">blockPageReasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSessionInput">checkSessionInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egressInput">egressInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidationInput">insecureDisableDnssecValidationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4OverrideInput">l4OverrideInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHostInput">overrideHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIpsInput">overrideIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeaders">addHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabled">blockPageEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReason">blockPageReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidation">insecureDisableDnssecValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHost">overrideHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIps">overrideIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
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

##### `addHeadersInput`<sup>Optional</sup> <a name="addHeadersInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAddHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

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

##### `checkSessionInput`<sup>Optional</sup> <a name="checkSessionInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSessionInput"></a>

```java
public TeamsRuleRuleSettingsCheckSession getCheckSessionInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

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

##### `l4OverrideInput`<sup>Optional</sup> <a name="l4OverrideInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4OverrideInput"></a>

```java
public TeamsRuleRuleSettingsL4Override getL4OverrideInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

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

##### `addHeaders`<sup>Required</sup> <a name="addHeaders" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAddHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

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

##### `insecureDisableDnssecValidation`<sup>Required</sup> <a name="insecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidation"></a>

```java
public java.lang.Object getInsecureDisableDnssecValidation();
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

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.internalValue"></a>

```java
public TeamsRuleRuleSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

---



