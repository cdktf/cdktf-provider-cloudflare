# `logpushJob` Submodule <a name="`logpushJob` Submodule" id="@cdktf/provider-cloudflare.logpushJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogpushJob <a name="LogpushJob" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job cloudflare_logpush_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LogpushJob(Construct Scope, string Id, LogpushJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig">LogpushJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig">LogpushJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetLogpullOptions">ResetLogpullOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOwnershipChallenge">ResetOwnershipChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetLogpullOptions` <a name="ResetLogpullOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetLogpullOptions"></a>

```csharp
private void ResetLogpullOptions()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOwnershipChallenge` <a name="ResetOwnershipChallenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOwnershipChallenge"></a>

```csharp
private void ResetOwnershipChallenge()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LogpushJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LogpushJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LogpushJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.datasetInput">DatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConfInput">DestinationConfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptionsInput">LogpullOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallengeInput">OwnershipChallengeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConf">DestinationConf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptions">LogpullOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallenge">OwnershipChallenge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.datasetInput"></a>

```csharp
public string DatasetInput { get; }
```

- *Type:* string

---

##### `DestinationConfInput`<sup>Optional</sup> <a name="DestinationConfInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConfInput"></a>

```csharp
public string DestinationConfInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `LogpullOptionsInput`<sup>Optional</sup> <a name="LogpullOptionsInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptionsInput"></a>

```csharp
public string LogpullOptionsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnershipChallengeInput`<sup>Optional</sup> <a name="OwnershipChallengeInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallengeInput"></a>

```csharp
public string OwnershipChallengeInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `DestinationConf`<sup>Required</sup> <a name="DestinationConf" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConf"></a>

```csharp
public string DestinationConf { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `LogpullOptions`<sup>Required</sup> <a name="LogpullOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptions"></a>

```csharp
public string LogpullOptions { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OwnershipChallenge`<sup>Required</sup> <a name="OwnershipChallenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallenge"></a>

```csharp
public string OwnershipChallenge { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogpushJobConfig <a name="LogpushJobConfig" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LogpushJobConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Dataset,
    string DestinationConf,
    string AccountId = null,
    object Enabled = null,
    string Filter = null,
    string Frequency = null,
    string Id = null,
    string Kind = null,
    string LogpullOptions = null,
    string Name = null,
    string OwnershipChallenge = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dataset">Dataset</a></code> | <code>string</code> | Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.destinationConf">DestinationConf</a></code> | <code>string</code> | Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether to enable the job. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.filter">Filter</a></code> | <code>string</code> | Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.frequency">Frequency</a></code> | <code>string</code> | A higher frequency will result in logs being pushed on faster with smaller files. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#id LogpushJob#id}. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.kind">Kind</a></code> | <code>string</code> | The kind of logpush job to create. Available values: `edge`, `instant-logs`, `""`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.logpullOptions">LogpullOptions</a></code> | <code>string</code> | Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpush options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.name">Name</a></code> | <code>string</code> | The name of the logpush job to create. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.ownershipChallenge">OwnershipChallenge</a></code> | <code>string</code> | Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dataset"></a>

```csharp
public string Dataset { get; set; }
```

- *Type:* string

Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.

Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination). Available values: `access_requests`, `firewall_events`, `http_requests`, `spectrum_events`, `nel_reports`, `audit_logs`, `gateway_dns`, `gateway_http`, `gateway_network`, `dns_logs`, `network_analytics_logs`, `workers_trace_events`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#dataset LogpushJob#dataset}

---

##### `DestinationConf`<sup>Required</sup> <a name="DestinationConf" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.destinationConf"></a>

```csharp
public string DestinationConf { get; set; }
```

- *Type:* string

Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.

Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#destination_conf LogpushJob#destination_conf}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#account_id LogpushJob#account_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether to enable the job.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#enabled LogpushJob#enabled}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#filter LogpushJob#filter}

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

A higher frequency will result in logs being pushed on faster with smaller files.

`low` frequency will push logs less often with larger files. Available values: `high`, `low`. Defaults to `high`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#frequency LogpushJob#frequency}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#id LogpushJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

The kind of logpush job to create. Available values: `edge`, `instant-logs`, `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#kind LogpushJob#kind}

---

##### `LogpullOptions`<sup>Optional</sup> <a name="LogpullOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.logpullOptions"></a>

```csharp
public string LogpullOptions { get; set; }
```

- *Type:* string

Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpush options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#logpull_options LogpushJob#logpull_options}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the logpush job to create.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#name LogpushJob#name}

---

##### `OwnershipChallenge`<sup>Optional</sup> <a name="OwnershipChallenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.ownershipChallenge"></a>

```csharp
public string OwnershipChallenge { get; set; }
```

- *Type:* string

Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic.

See [Developer documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#usage).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#ownership_challenge LogpushJob#ownership_challenge}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/logpush_job#zone_id LogpushJob#zone_id}

---


