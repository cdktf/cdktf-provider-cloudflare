# `teamsRule` Submodule <a name="`teamsRule` Submodule" id="@cdktf/provider-cloudflare.teamsRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamsRule <a name="TeamsRule" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule cloudflare_teams_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsRule(Construct Scope, string Id, TeamsRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig">TeamsRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig">TeamsRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings">PutRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetRuleSettings">ResetRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetTraffic">ResetTraffic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRuleSettings` <a name="PutRuleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings"></a>

```csharp
private void PutRuleSettings(TeamsRuleRuleSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.putRuleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

---

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetDevicePosture"></a>

```csharp
private void ResetDevicePosture()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetRuleSettings` <a name="ResetRuleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetRuleSettings"></a>

```csharp
private void ResetRuleSettings()
```

##### `ResetTraffic` <a name="ResetTraffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.resetTraffic"></a>

```csharp
private void ResetTraffic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TeamsRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TeamsRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TeamsRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettings">RuleSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference">TeamsRuleRuleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePostureInput">DevicePostureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filtersInput">FiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identityInput">IdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedenceInput">PrecedenceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettingsInput">RuleSettingsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.trafficInput">TrafficInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePosture">DevicePosture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filters">Filters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identity">Identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedence">Precedence</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.traffic">Traffic</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `RuleSettings`<sup>Required</sup> <a name="RuleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettings"></a>

```csharp
public TeamsRuleRuleSettingsOutputReference RuleSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference">TeamsRuleRuleSettingsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePostureInput"></a>

```csharp
public string DevicePostureInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filtersInput"></a>

```csharp
public string[] FiltersInput { get; }
```

- *Type:* string[]

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identityInput"></a>

```csharp
public string IdentityInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrecedenceInput`<sup>Optional</sup> <a name="PrecedenceInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedenceInput"></a>

```csharp
public double PrecedenceInput { get; }
```

- *Type:* double

---

##### `RuleSettingsInput`<sup>Optional</sup> <a name="RuleSettingsInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.ruleSettingsInput"></a>

```csharp
public TeamsRuleRuleSettings RuleSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

---

##### `TrafficInput`<sup>Optional</sup> <a name="TrafficInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.trafficInput"></a>

```csharp
public string TrafficInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.devicePosture"></a>

```csharp
public string DevicePosture { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.filters"></a>

```csharp
public string[] Filters { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.identity"></a>

```csharp
public string Identity { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.precedence"></a>

```csharp
public double Precedence { get; }
```

- *Type:* double

---

##### `Traffic`<sup>Required</sup> <a name="Traffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.traffic"></a>

```csharp
public string Traffic { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.teamsRule.TeamsRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamsRuleConfig <a name="TeamsRuleConfig" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsRuleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Action,
    string Description,
    string Name,
    double Precedence,
    string DevicePosture = null,
    object Enabled = null,
    string[] Filters = null,
    string Id = null,
    string Identity = null,
    TeamsRuleRuleSettings RuleSettings = null,
    string Traffic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.action">Action</a></code> | <code>string</code> | The action executed by matched teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.description">Description</a></code> | <code>string</code> | The description of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.precedence">Precedence</a></code> | <code>double</code> | The evaluation precedence of the teams rule. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.devicePosture">DevicePosture</a></code> | <code>string</code> | The wirefilter expression to be used for device_posture check matching. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Indicator of rule enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.filters">Filters</a></code> | <code>string[]</code> | The protocol or layer to evaluate the traffic and identity expressions. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#id TeamsRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.identity">Identity</a></code> | <code>string</code> | The wirefilter expression to be used for identity matching. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.ruleSettings">RuleSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a></code> | rule_settings block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.traffic">Traffic</a></code> | <code>string</code> | The wirefilter expression to be used for traffic matching. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#account_id TeamsRule#account_id}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The action executed by matched teams rule.

Available values: `allow`, `block`, `safesearch`, `ytrestricted`, `on`, `off`, `scan`, `noscan`, `isolate`, `noisolate`, `override`, `l4_override`, `egress`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#action TeamsRule#action}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the teams rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#description TeamsRule#description}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the teams rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#name TeamsRule#name}

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.precedence"></a>

```csharp
public double Precedence { get; set; }
```

- *Type:* double

The evaluation precedence of the teams rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#precedence TeamsRule#precedence}

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.devicePosture"></a>

```csharp
public string DevicePosture { get; set; }
```

- *Type:* string

The wirefilter expression to be used for device_posture check matching.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#device_posture TeamsRule#device_posture}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Indicator of rule enablement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#enabled TeamsRule#enabled}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.filters"></a>

```csharp
public string[] Filters { get; set; }
```

- *Type:* string[]

The protocol or layer to evaluate the traffic and identity expressions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#filters TeamsRule#filters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#id TeamsRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.identity"></a>

```csharp
public string Identity { get; set; }
```

- *Type:* string

The wirefilter expression to be used for identity matching.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#identity TeamsRule#identity}

---

##### `RuleSettings`<sup>Optional</sup> <a name="RuleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.ruleSettings"></a>

```csharp
public TeamsRuleRuleSettings RuleSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

rule_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#rule_settings TeamsRule#rule_settings}

---

##### `Traffic`<sup>Optional</sup> <a name="Traffic" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleConfig.property.traffic"></a>

```csharp
public string Traffic { get; set; }
```

- *Type:* string

The wirefilter expression to be used for traffic matching.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#traffic TeamsRule#traffic}

---

### TeamsRuleRuleSettings <a name="TeamsRuleRuleSettings" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsRuleRuleSettings {
    System.Collections.Generic.IDictionary<string, string> AddHeaders = null,
    TeamsRuleRuleSettingsBisoAdminControls BisoAdminControls = null,
    object BlockPageEnabled = null,
    string BlockPageReason = null,
    TeamsRuleRuleSettingsCheckSession CheckSession = null,
    TeamsRuleRuleSettingsEgress Egress = null,
    object InsecureDisableDnssecValidation = null,
    TeamsRuleRuleSettingsL4Override L4Override = null,
    string OverrideHost = null,
    string[] OverrideIps = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.addHeaders">AddHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Add custom headers to allowed requests in the form of key-value pairs. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bisoAdminControls">BisoAdminControls</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a></code> | biso_admin_controls block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageEnabled">BlockPageEnabled</a></code> | <code>object</code> | Indicator of block page enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageReason">BlockPageReason</a></code> | <code>string</code> | The displayed reason for a user being blocked. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.checkSession">CheckSession</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a></code> | check_session block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.egress">Egress</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a></code> | egress block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.insecureDisableDnssecValidation">InsecureDisableDnssecValidation</a></code> | <code>object</code> | Disable DNSSEC validation (must be Allow rule). |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.l4Override">L4Override</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a></code> | l4override block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideHost">OverrideHost</a></code> | <code>string</code> | The host to override matching DNS queries with. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideIps">OverrideIps</a></code> | <code>string[]</code> | The IPs to override matching DNS queries with. |

---

##### `AddHeaders`<sup>Optional</sup> <a name="AddHeaders" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.addHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AddHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Add custom headers to allowed requests in the form of key-value pairs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#add_headers TeamsRule#add_headers}

---

##### `BisoAdminControls`<sup>Optional</sup> <a name="BisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.bisoAdminControls"></a>

```csharp
public TeamsRuleRuleSettingsBisoAdminControls BisoAdminControls { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

biso_admin_controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#biso_admin_controls TeamsRule#biso_admin_controls}

---

##### `BlockPageEnabled`<sup>Optional</sup> <a name="BlockPageEnabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageEnabled"></a>

```csharp
public object BlockPageEnabled { get; set; }
```

- *Type:* object

Indicator of block page enablement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#block_page_enabled TeamsRule#block_page_enabled}

---

##### `BlockPageReason`<sup>Optional</sup> <a name="BlockPageReason" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.blockPageReason"></a>

```csharp
public string BlockPageReason { get; set; }
```

- *Type:* string

The displayed reason for a user being blocked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#block_page_reason TeamsRule#block_page_reason}

---

##### `CheckSession`<sup>Optional</sup> <a name="CheckSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.checkSession"></a>

```csharp
public TeamsRuleRuleSettingsCheckSession CheckSession { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

check_session block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#check_session TeamsRule#check_session}

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.egress"></a>

```csharp
public TeamsRuleRuleSettingsEgress Egress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

egress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#egress TeamsRule#egress}

---

##### `InsecureDisableDnssecValidation`<sup>Optional</sup> <a name="InsecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.insecureDisableDnssecValidation"></a>

```csharp
public object InsecureDisableDnssecValidation { get; set; }
```

- *Type:* object

Disable DNSSEC validation (must be Allow rule).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#insecure_disable_dnssec_validation TeamsRule#insecure_disable_dnssec_validation}

---

##### `L4Override`<sup>Optional</sup> <a name="L4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.l4Override"></a>

```csharp
public TeamsRuleRuleSettingsL4Override L4Override { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

l4override block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#l4override TeamsRule#l4override}

---

##### `OverrideHost`<sup>Optional</sup> <a name="OverrideHost" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideHost"></a>

```csharp
public string OverrideHost { get; set; }
```

- *Type:* string

The host to override matching DNS queries with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#override_host TeamsRule#override_host}

---

##### `OverrideIps`<sup>Optional</sup> <a name="OverrideIps" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings.property.overrideIps"></a>

```csharp
public string[] OverrideIps { get; set; }
```

- *Type:* string[]

The IPs to override matching DNS queries with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#override_ips TeamsRule#override_ips}

---

### TeamsRuleRuleSettingsBisoAdminControls <a name="TeamsRuleRuleSettingsBisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsRuleRuleSettingsBisoAdminControls {
    object DisableCopyPaste = null,
    object DisableDownload = null,
    object DisableKeyboard = null,
    object DisablePrinting = null,
    object DisableUpload = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableCopyPaste">DisableCopyPaste</a></code> | <code>object</code> | Disable copy-paste. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableDownload">DisableDownload</a></code> | <code>object</code> | Disable download. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableKeyboard">DisableKeyboard</a></code> | <code>object</code> | Disable keyboard usage. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disablePrinting">DisablePrinting</a></code> | <code>object</code> | Disable printing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableUpload">DisableUpload</a></code> | <code>object</code> | Disable upload. |

---

##### `DisableCopyPaste`<sup>Optional</sup> <a name="DisableCopyPaste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableCopyPaste"></a>

```csharp
public object DisableCopyPaste { get; set; }
```

- *Type:* object

Disable copy-paste.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#disable_copy_paste TeamsRule#disable_copy_paste}

---

##### `DisableDownload`<sup>Optional</sup> <a name="DisableDownload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableDownload"></a>

```csharp
public object DisableDownload { get; set; }
```

- *Type:* object

Disable download.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#disable_download TeamsRule#disable_download}

---

##### `DisableKeyboard`<sup>Optional</sup> <a name="DisableKeyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableKeyboard"></a>

```csharp
public object DisableKeyboard { get; set; }
```

- *Type:* object

Disable keyboard usage.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#disable_keyboard TeamsRule#disable_keyboard}

---

##### `DisablePrinting`<sup>Optional</sup> <a name="DisablePrinting" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disablePrinting"></a>

```csharp
public object DisablePrinting { get; set; }
```

- *Type:* object

Disable printing.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#disable_printing TeamsRule#disable_printing}

---

##### `DisableUpload`<sup>Optional</sup> <a name="DisableUpload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls.property.disableUpload"></a>

```csharp
public object DisableUpload { get; set; }
```

- *Type:* object

Disable upload.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#disable_upload TeamsRule#disable_upload}

---

### TeamsRuleRuleSettingsCheckSession <a name="TeamsRuleRuleSettingsCheckSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsRuleRuleSettingsCheckSession {
    string Duration,
    object Enforce
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.duration">Duration</a></code> | <code>string</code> | Configure how fresh the session needs to be to be considered valid. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.enforce">Enforce</a></code> | <code>object</code> | Enable session enforcement for this rule. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Configure how fresh the session needs to be to be considered valid.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#duration TeamsRule#duration}

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession.property.enforce"></a>

```csharp
public object Enforce { get; set; }
```

- *Type:* object

Enable session enforcement for this rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#enforce TeamsRule#enforce}

---

### TeamsRuleRuleSettingsEgress <a name="TeamsRuleRuleSettingsEgress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsRuleRuleSettingsEgress {
    string Ipv4,
    string Ipv6,
    string Ipv4Fallback = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4">Ipv4</a></code> | <code>string</code> | The IPv4 address to be used for egress. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv6">Ipv6</a></code> | <code>string</code> | The IPv6 range to be used for egress. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4Fallback">Ipv4Fallback</a></code> | <code>string</code> | The IPv4 address to be used for egress in the event of an error egressing with the primary IPv4. |

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4"></a>

```csharp
public string Ipv4 { get; set; }
```

- *Type:* string

The IPv4 address to be used for egress.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#ipv4 TeamsRule#ipv4}

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv6"></a>

```csharp
public string Ipv6 { get; set; }
```

- *Type:* string

The IPv6 range to be used for egress.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#ipv6 TeamsRule#ipv6}

---

##### `Ipv4Fallback`<sup>Optional</sup> <a name="Ipv4Fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress.property.ipv4Fallback"></a>

```csharp
public string Ipv4Fallback { get; set; }
```

- *Type:* string

The IPv4 address to be used for egress in the event of an error egressing with the primary IPv4.

Can be '0.0.0.0' to indicate local egreass via Warp IPs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#ipv4_fallback TeamsRule#ipv4_fallback}

---

### TeamsRuleRuleSettingsL4Override <a name="TeamsRuleRuleSettingsL4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsRuleRuleSettingsL4Override {
    string Ip,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.ip">Ip</a></code> | <code>string</code> | Override IP to forward traffic to. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.port">Port</a></code> | <code>double</code> | Override Port to forward traffic to. |

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

Override IP to forward traffic to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#ip TeamsRule#ip}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Override Port to forward traffic to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_rule#port TeamsRule#port}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamsRuleRuleSettingsBisoAdminControlsOutputReference <a name="TeamsRuleRuleSettingsBisoAdminControlsOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsRuleRuleSettingsBisoAdminControlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableCopyPaste">ResetDisableCopyPaste</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableDownload">ResetDisableDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableKeyboard">ResetDisableKeyboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisablePrinting">ResetDisablePrinting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableUpload">ResetDisableUpload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableCopyPaste` <a name="ResetDisableCopyPaste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableCopyPaste"></a>

```csharp
private void ResetDisableCopyPaste()
```

##### `ResetDisableDownload` <a name="ResetDisableDownload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableDownload"></a>

```csharp
private void ResetDisableDownload()
```

##### `ResetDisableKeyboard` <a name="ResetDisableKeyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableKeyboard"></a>

```csharp
private void ResetDisableKeyboard()
```

##### `ResetDisablePrinting` <a name="ResetDisablePrinting" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisablePrinting"></a>

```csharp
private void ResetDisablePrinting()
```

##### `ResetDisableUpload` <a name="ResetDisableUpload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.resetDisableUpload"></a>

```csharp
private void ResetDisableUpload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPasteInput">DisableCopyPasteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownloadInput">DisableDownloadInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboardInput">DisableKeyboardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrintingInput">DisablePrintingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUploadInput">DisableUploadInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPaste">DisableCopyPaste</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownload">DisableDownload</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboard">DisableKeyboard</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrinting">DisablePrinting</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUpload">DisableUpload</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableCopyPasteInput`<sup>Optional</sup> <a name="DisableCopyPasteInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPasteInput"></a>

```csharp
public object DisableCopyPasteInput { get; }
```

- *Type:* object

---

##### `DisableDownloadInput`<sup>Optional</sup> <a name="DisableDownloadInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownloadInput"></a>

```csharp
public object DisableDownloadInput { get; }
```

- *Type:* object

---

##### `DisableKeyboardInput`<sup>Optional</sup> <a name="DisableKeyboardInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboardInput"></a>

```csharp
public object DisableKeyboardInput { get; }
```

- *Type:* object

---

##### `DisablePrintingInput`<sup>Optional</sup> <a name="DisablePrintingInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrintingInput"></a>

```csharp
public object DisablePrintingInput { get; }
```

- *Type:* object

---

##### `DisableUploadInput`<sup>Optional</sup> <a name="DisableUploadInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUploadInput"></a>

```csharp
public object DisableUploadInput { get; }
```

- *Type:* object

---

##### `DisableCopyPaste`<sup>Required</sup> <a name="DisableCopyPaste" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableCopyPaste"></a>

```csharp
public object DisableCopyPaste { get; }
```

- *Type:* object

---

##### `DisableDownload`<sup>Required</sup> <a name="DisableDownload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableDownload"></a>

```csharp
public object DisableDownload { get; }
```

- *Type:* object

---

##### `DisableKeyboard`<sup>Required</sup> <a name="DisableKeyboard" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableKeyboard"></a>

```csharp
public object DisableKeyboard { get; }
```

- *Type:* object

---

##### `DisablePrinting`<sup>Required</sup> <a name="DisablePrinting" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disablePrinting"></a>

```csharp
public object DisablePrinting { get; }
```

- *Type:* object

---

##### `DisableUpload`<sup>Required</sup> <a name="DisableUpload" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.disableUpload"></a>

```csharp
public object DisableUpload { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference.property.internalValue"></a>

```csharp
public TeamsRuleRuleSettingsBisoAdminControls InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

---


### TeamsRuleRuleSettingsCheckSessionOutputReference <a name="TeamsRuleRuleSettingsCheckSessionOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsRuleRuleSettingsCheckSessionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforceInput">EnforceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforce">Enforce</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `EnforceInput`<sup>Optional</sup> <a name="EnforceInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforceInput"></a>

```csharp
public object EnforceInput { get; }
```

- *Type:* object

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.enforce"></a>

```csharp
public object Enforce { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference.property.internalValue"></a>

```csharp
public TeamsRuleRuleSettingsCheckSession InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

---


### TeamsRuleRuleSettingsEgressOutputReference <a name="TeamsRuleRuleSettingsEgressOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsRuleRuleSettingsEgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resetIpv4Fallback">ResetIpv4Fallback</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv4Fallback` <a name="ResetIpv4Fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.resetIpv4Fallback"></a>

```csharp
private void ResetIpv4Fallback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4FallbackInput">Ipv4FallbackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Input">Ipv4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4">Ipv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Fallback">Ipv4Fallback</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6">Ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv4FallbackInput`<sup>Optional</sup> <a name="Ipv4FallbackInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4FallbackInput"></a>

```csharp
public string Ipv4FallbackInput { get; }
```

- *Type:* string

---

##### `Ipv4Input`<sup>Optional</sup> <a name="Ipv4Input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Input"></a>

```csharp
public string Ipv4Input { get; }
```

- *Type:* string

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6Input"></a>

```csharp
public string Ipv6Input { get; }
```

- *Type:* string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4"></a>

```csharp
public string Ipv4 { get; }
```

- *Type:* string

---

##### `Ipv4Fallback`<sup>Required</sup> <a name="Ipv4Fallback" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv4Fallback"></a>

```csharp
public string Ipv4Fallback { get; }
```

- *Type:* string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.ipv6"></a>

```csharp
public string Ipv6 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference.property.internalValue"></a>

```csharp
public TeamsRuleRuleSettingsEgress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

---


### TeamsRuleRuleSettingsL4OverrideOutputReference <a name="TeamsRuleRuleSettingsL4OverrideOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsRuleRuleSettingsL4OverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference.property.internalValue"></a>

```csharp
public TeamsRuleRuleSettingsL4Override InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

---


### TeamsRuleRuleSettingsOutputReference <a name="TeamsRuleRuleSettingsOutputReference" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsRuleRuleSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls">PutBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putCheckSession">PutCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putEgress">PutEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putL4Override">PutL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAddHeaders">ResetAddHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBisoAdminControls">ResetBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageEnabled">ResetBlockPageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageReason">ResetBlockPageReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetCheckSession">ResetCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetEgress">ResetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetInsecureDisableDnssecValidation">ResetInsecureDisableDnssecValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetL4Override">ResetL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideHost">ResetOverrideHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideIps">ResetOverrideIps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBisoAdminControls` <a name="PutBisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls"></a>

```csharp
private void PutBisoAdminControls(TeamsRuleRuleSettingsBisoAdminControls Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putBisoAdminControls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

---

##### `PutCheckSession` <a name="PutCheckSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putCheckSession"></a>

```csharp
private void PutCheckSession(TeamsRuleRuleSettingsCheckSession Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putCheckSession.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

---

##### `PutEgress` <a name="PutEgress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putEgress"></a>

```csharp
private void PutEgress(TeamsRuleRuleSettingsEgress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putEgress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

---

##### `PutL4Override` <a name="PutL4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putL4Override"></a>

```csharp
private void PutL4Override(TeamsRuleRuleSettingsL4Override Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.putL4Override.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

---

##### `ResetAddHeaders` <a name="ResetAddHeaders" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetAddHeaders"></a>

```csharp
private void ResetAddHeaders()
```

##### `ResetBisoAdminControls` <a name="ResetBisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBisoAdminControls"></a>

```csharp
private void ResetBisoAdminControls()
```

##### `ResetBlockPageEnabled` <a name="ResetBlockPageEnabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageEnabled"></a>

```csharp
private void ResetBlockPageEnabled()
```

##### `ResetBlockPageReason` <a name="ResetBlockPageReason" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetBlockPageReason"></a>

```csharp
private void ResetBlockPageReason()
```

##### `ResetCheckSession` <a name="ResetCheckSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetCheckSession"></a>

```csharp
private void ResetCheckSession()
```

##### `ResetEgress` <a name="ResetEgress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetEgress"></a>

```csharp
private void ResetEgress()
```

##### `ResetInsecureDisableDnssecValidation` <a name="ResetInsecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetInsecureDisableDnssecValidation"></a>

```csharp
private void ResetInsecureDisableDnssecValidation()
```

##### `ResetL4Override` <a name="ResetL4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetL4Override"></a>

```csharp
private void ResetL4Override()
```

##### `ResetOverrideHost` <a name="ResetOverrideHost" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideHost"></a>

```csharp
private void ResetOverrideHost()
```

##### `ResetOverrideIps` <a name="ResetOverrideIps" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.resetOverrideIps"></a>

```csharp
private void ResetOverrideIps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControls">BisoAdminControls</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference">TeamsRuleRuleSettingsBisoAdminControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSession">CheckSession</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference">TeamsRuleRuleSettingsCheckSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egress">Egress</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference">TeamsRuleRuleSettingsEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4Override">L4Override</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference">TeamsRuleRuleSettingsL4OverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeadersInput">AddHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControlsInput">BisoAdminControlsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabledInput">BlockPageEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReasonInput">BlockPageReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSessionInput">CheckSessionInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egressInput">EgressInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidationInput">InsecureDisableDnssecValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4OverrideInput">L4OverrideInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHostInput">OverrideHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIpsInput">OverrideIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeaders">AddHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabled">BlockPageEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReason">BlockPageReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidation">InsecureDisableDnssecValidation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHost">OverrideHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIps">OverrideIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BisoAdminControls`<sup>Required</sup> <a name="BisoAdminControls" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControls"></a>

```csharp
public TeamsRuleRuleSettingsBisoAdminControlsOutputReference BisoAdminControls { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControlsOutputReference">TeamsRuleRuleSettingsBisoAdminControlsOutputReference</a>

---

##### `CheckSession`<sup>Required</sup> <a name="CheckSession" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSession"></a>

```csharp
public TeamsRuleRuleSettingsCheckSessionOutputReference CheckSession { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSessionOutputReference">TeamsRuleRuleSettingsCheckSessionOutputReference</a>

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egress"></a>

```csharp
public TeamsRuleRuleSettingsEgressOutputReference Egress { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgressOutputReference">TeamsRuleRuleSettingsEgressOutputReference</a>

---

##### `L4Override`<sup>Required</sup> <a name="L4Override" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4Override"></a>

```csharp
public TeamsRuleRuleSettingsL4OverrideOutputReference L4Override { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4OverrideOutputReference">TeamsRuleRuleSettingsL4OverrideOutputReference</a>

---

##### `AddHeadersInput`<sup>Optional</sup> <a name="AddHeadersInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AddHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BisoAdminControlsInput`<sup>Optional</sup> <a name="BisoAdminControlsInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.bisoAdminControlsInput"></a>

```csharp
public TeamsRuleRuleSettingsBisoAdminControls BisoAdminControlsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsBisoAdminControls">TeamsRuleRuleSettingsBisoAdminControls</a>

---

##### `BlockPageEnabledInput`<sup>Optional</sup> <a name="BlockPageEnabledInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabledInput"></a>

```csharp
public object BlockPageEnabledInput { get; }
```

- *Type:* object

---

##### `BlockPageReasonInput`<sup>Optional</sup> <a name="BlockPageReasonInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReasonInput"></a>

```csharp
public string BlockPageReasonInput { get; }
```

- *Type:* string

---

##### `CheckSessionInput`<sup>Optional</sup> <a name="CheckSessionInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.checkSessionInput"></a>

```csharp
public TeamsRuleRuleSettingsCheckSession CheckSessionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsCheckSession">TeamsRuleRuleSettingsCheckSession</a>

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.egressInput"></a>

```csharp
public TeamsRuleRuleSettingsEgress EgressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsEgress">TeamsRuleRuleSettingsEgress</a>

---

##### `InsecureDisableDnssecValidationInput`<sup>Optional</sup> <a name="InsecureDisableDnssecValidationInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidationInput"></a>

```csharp
public object InsecureDisableDnssecValidationInput { get; }
```

- *Type:* object

---

##### `L4OverrideInput`<sup>Optional</sup> <a name="L4OverrideInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.l4OverrideInput"></a>

```csharp
public TeamsRuleRuleSettingsL4Override L4OverrideInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsL4Override">TeamsRuleRuleSettingsL4Override</a>

---

##### `OverrideHostInput`<sup>Optional</sup> <a name="OverrideHostInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHostInput"></a>

```csharp
public string OverrideHostInput { get; }
```

- *Type:* string

---

##### `OverrideIpsInput`<sup>Optional</sup> <a name="OverrideIpsInput" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIpsInput"></a>

```csharp
public string[] OverrideIpsInput { get; }
```

- *Type:* string[]

---

##### `AddHeaders`<sup>Required</sup> <a name="AddHeaders" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.addHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AddHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BlockPageEnabled`<sup>Required</sup> <a name="BlockPageEnabled" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageEnabled"></a>

```csharp
public object BlockPageEnabled { get; }
```

- *Type:* object

---

##### `BlockPageReason`<sup>Required</sup> <a name="BlockPageReason" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.blockPageReason"></a>

```csharp
public string BlockPageReason { get; }
```

- *Type:* string

---

##### `InsecureDisableDnssecValidation`<sup>Required</sup> <a name="InsecureDisableDnssecValidation" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.insecureDisableDnssecValidation"></a>

```csharp
public object InsecureDisableDnssecValidation { get; }
```

- *Type:* object

---

##### `OverrideHost`<sup>Required</sup> <a name="OverrideHost" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideHost"></a>

```csharp
public string OverrideHost { get; }
```

- *Type:* string

---

##### `OverrideIps`<sup>Required</sup> <a name="OverrideIps" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.overrideIps"></a>

```csharp
public string[] OverrideIps { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettingsOutputReference.property.internalValue"></a>

```csharp
public TeamsRuleRuleSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsRule.TeamsRuleRuleSettings">TeamsRuleRuleSettings</a>

---


