# `dataCloudflareRuleset` Submodule <a name="`dataCloudflareRuleset` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareRuleset <a name="DataCloudflareRuleset" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/ruleset cloudflare_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRuleset(Construct Scope, string Id, DataCloudflareRulesetConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig">DataCloudflareRulesetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig">DataCloudflareRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.resetRulesetId">ResetRulesetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetRulesetId` <a name="ResetRulesetId" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.resetRulesetId"></a>

```csharp
private void ResetRulesetId()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareRuleset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareRuleset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareRuleset.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareRuleset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareRuleset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareRuleset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/ruleset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.phase">Phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList">DataCloudflareRulesetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.rulesetIdInput">RulesetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.rulesetId">RulesetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.phase"></a>

```csharp
public string Phase { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.rules"></a>

```csharp
public DataCloudflareRulesetRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList">DataCloudflareRulesetRulesList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `RulesetIdInput`<sup>Optional</sup> <a name="RulesetIdInput" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.rulesetIdInput"></a>

```csharp
public string RulesetIdInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `RulesetId`<sup>Required</sup> <a name="RulesetId" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.rulesetId"></a>

```csharp
public string RulesetId { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRuleset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareRulesetConfig <a name="DataCloudflareRulesetConfig" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId = null,
    string RulesetId = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.accountId">AccountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.rulesetId">RulesetId</a></code> | <code>string</code> | The unique ID of the ruleset. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/ruleset#account_id DataCloudflareRuleset#account_id}

---

##### `RulesetId`<sup>Optional</sup> <a name="RulesetId" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.rulesetId"></a>

```csharp
public string RulesetId { get; set; }
```

- *Type:* string

The unique ID of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/ruleset#ruleset_id DataCloudflareRuleset#ruleset_id}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/ruleset#zone_id DataCloudflareRuleset#zone_id}

---

### DataCloudflareRulesetRules <a name="DataCloudflareRulesetRules" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRules {

};
```


### DataCloudflareRulesetRulesActionParameters <a name="DataCloudflareRulesetRulesActionParameters" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParameters {

};
```


### DataCloudflareRulesetRulesActionParametersAlgorithms <a name="DataCloudflareRulesetRulesActionParametersAlgorithms" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersAlgorithms {

};
```


### DataCloudflareRulesetRulesActionParametersAutominify <a name="DataCloudflareRulesetRulesActionParametersAutominify" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominify.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersAutominify {

};
```


### DataCloudflareRulesetRulesActionParametersBrowserTtl <a name="DataCloudflareRulesetRulesActionParametersBrowserTtl" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersBrowserTtl {

};
```


### DataCloudflareRulesetRulesActionParametersCacheKey <a name="DataCloudflareRulesetRulesActionParametersCacheKey" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKey {

};
```


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey {

};
```


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie {

};
```


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader {

};
```


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost {

};
```


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString {

};
```


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude {

};
```


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude {

};
```


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser {

};
```


### DataCloudflareRulesetRulesActionParametersCacheReserve <a name="DataCloudflareRulesetRulesActionParametersCacheReserve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserve"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserve.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheReserve {

};
```


### DataCloudflareRulesetRulesActionParametersCookieFields <a name="DataCloudflareRulesetRulesActionParametersCookieFields" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCookieFields {

};
```


### DataCloudflareRulesetRulesActionParametersEdgeTtl <a name="DataCloudflareRulesetRulesActionParametersEdgeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersEdgeTtl {

};
```


### DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl <a name="DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl {

};
```


### DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange <a name="DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange {

};
```


### DataCloudflareRulesetRulesActionParametersFromListStruct <a name="DataCloudflareRulesetRulesActionParametersFromListStruct" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersFromListStruct {

};
```


### DataCloudflareRulesetRulesActionParametersFromValue <a name="DataCloudflareRulesetRulesActionParametersFromValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersFromValue {

};
```


### DataCloudflareRulesetRulesActionParametersFromValueTargetUrl <a name="DataCloudflareRulesetRulesActionParametersFromValueTargetUrl" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersFromValueTargetUrl {

};
```


### DataCloudflareRulesetRulesActionParametersHeaders <a name="DataCloudflareRulesetRulesActionParametersHeaders" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersHeaders {

};
```


### DataCloudflareRulesetRulesActionParametersMatchedData <a name="DataCloudflareRulesetRulesActionParametersMatchedData" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersMatchedData {

};
```


### DataCloudflareRulesetRulesActionParametersOrigin <a name="DataCloudflareRulesetRulesActionParametersOrigin" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOrigin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersOrigin {

};
```


### DataCloudflareRulesetRulesActionParametersOverrides <a name="DataCloudflareRulesetRulesActionParametersOverrides" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersOverrides {

};
```


### DataCloudflareRulesetRulesActionParametersOverridesCategories <a name="DataCloudflareRulesetRulesActionParametersOverridesCategories" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategories.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersOverridesCategories {

};
```


### DataCloudflareRulesetRulesActionParametersOverridesRules <a name="DataCloudflareRulesetRulesActionParametersOverridesRules" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersOverridesRules {

};
```


### DataCloudflareRulesetRulesActionParametersRequestFields <a name="DataCloudflareRulesetRulesActionParametersRequestFields" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersRequestFields {

};
```


### DataCloudflareRulesetRulesActionParametersResponse <a name="DataCloudflareRulesetRulesActionParametersResponse" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersResponse {

};
```


### DataCloudflareRulesetRulesActionParametersResponseFields <a name="DataCloudflareRulesetRulesActionParametersResponseFields" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersResponseFields {

};
```


### DataCloudflareRulesetRulesActionParametersServeStale <a name="DataCloudflareRulesetRulesActionParametersServeStale" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStale.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersServeStale {

};
```


### DataCloudflareRulesetRulesActionParametersSni <a name="DataCloudflareRulesetRulesActionParametersSni" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSni"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSni.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersSni {

};
```


### DataCloudflareRulesetRulesActionParametersUri <a name="DataCloudflareRulesetRulesActionParametersUri" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUri.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersUri {

};
```


### DataCloudflareRulesetRulesActionParametersUriPath <a name="DataCloudflareRulesetRulesActionParametersUriPath" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersUriPath {

};
```


### DataCloudflareRulesetRulesActionParametersUriQuery <a name="DataCloudflareRulesetRulesActionParametersUriQuery" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersUriQuery {

};
```


### DataCloudflareRulesetRulesExposedCredentialCheck <a name="DataCloudflareRulesetRulesExposedCredentialCheck" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesExposedCredentialCheck {

};
```


### DataCloudflareRulesetRulesLogging <a name="DataCloudflareRulesetRulesLogging" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesLogging {

};
```


### DataCloudflareRulesetRulesRatelimit <a name="DataCloudflareRulesetRulesRatelimit" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesRatelimit {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareRulesetRulesActionParametersAlgorithmsList <a name="DataCloudflareRulesetRulesActionParametersAlgorithmsList" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersAlgorithmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.get"></a>

```csharp
private DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference <a name="DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithms">DataCloudflareRulesetRulesActionParametersAlgorithms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersAlgorithms InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithms">DataCloudflareRulesetRulesActionParametersAlgorithms</a>

---


### DataCloudflareRulesetRulesActionParametersAutominifyOutputReference <a name="DataCloudflareRulesetRulesActionParametersAutominifyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersAutominifyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.property.css">Css</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.property.html">Html</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.property.js">Js</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominify">DataCloudflareRulesetRulesActionParametersAutominify</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Css`<sup>Required</sup> <a name="Css" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.property.css"></a>

```csharp
public IResolvable Css { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.property.html"></a>

```csharp
public IResolvable Html { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Js`<sup>Required</sup> <a name="Js" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.property.js"></a>

```csharp
public IResolvable Js { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersAutominify InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominify">DataCloudflareRulesetRulesActionParametersAutominify</a>

---


### DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference <a name="DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.property.default">Default</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtl">DataCloudflareRulesetRulesActionParametersBrowserTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.property.default"></a>

```csharp
public double Default { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersBrowserTtl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtl">DataCloudflareRulesetRulesActionParametersBrowserTtl</a>

---


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence">CheckPresence</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CheckPresence`<sup>Required</sup> <a name="CheckPresence" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence"></a>

```csharp
public string[] CheckPresence { get; }
```

- *Type:* string[]

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

---


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence">CheckPresence</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.contains">Contains</a></code> | <code>HashiCorp.Cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin">ExcludeOrigin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CheckPresence`<sup>Required</sup> <a name="CheckPresence" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence"></a>

```csharp
public string[] CheckPresence { get; }
```

- *Type:* string[]

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.contains"></a>

```csharp
public StringListMap Contains { get; }
```

- *Type:* HashiCorp.Cdktf.StringListMap

---

##### `ExcludeOrigin`<sup>Required</sup> <a name="ExcludeOrigin" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin"></a>

```csharp
public IResolvable ExcludeOrigin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

---


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved">Resolved</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resolved`<sup>Required</sup> <a name="Resolved" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved"></a>

```csharp
public IResolvable Resolved { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHost</a>

---


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie">Cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.host">Host</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString">QueryString</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.user">User</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cookie`<sup>Required</sup> <a name="Cookie" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference Cookie { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.header"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference Header { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference</a>

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.host"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference Host { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference</a>

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference QueryString { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.user"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference User { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKey</a>

---


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.property.all">All</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.property.list">List</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.property.all"></a>

```csharp
public IResolvable All { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `List`<sup>Required</sup> <a name="List" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.property.list"></a>

```csharp
public string[] List { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude</a>

---


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.property.all">All</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.property.list">List</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.property.all"></a>

```csharp
public IResolvable All { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `List`<sup>Required</sup> <a name="List" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.property.list"></a>

```csharp
public string[] List { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude</a>

---


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude">Exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include">Include</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference Exclude { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference</a>

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference Include { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

---


### DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference <a name="DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType">DeviceType</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo">Geo</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang">Lang</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType"></a>

```csharp
public IResolvable DeviceType { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo"></a>

```csharp
public IResolvable Geo { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Lang`<sup>Required</sup> <a name="Lang" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang"></a>

```csharp
public IResolvable Lang { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUser</a>

---


### DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference <a name="DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType">CacheByDeviceType</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor">CacheDeceptionArmor</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.property.customKey">CustomKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder">IgnoreQueryStringsOrder</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKey">DataCloudflareRulesetRulesActionParametersCacheKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheByDeviceType`<sup>Required</sup> <a name="CacheByDeviceType" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType"></a>

```csharp
public IResolvable CacheByDeviceType { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CacheDeceptionArmor`<sup>Required</sup> <a name="CacheDeceptionArmor" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor"></a>

```csharp
public IResolvable CacheDeceptionArmor { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CustomKey`<sup>Required</sup> <a name="CustomKey" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.property.customKey"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference CustomKey { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference</a>

---

##### `IgnoreQueryStringsOrder`<sup>Required</sup> <a name="IgnoreQueryStringsOrder" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder"></a>

```csharp
public IResolvable IgnoreQueryStringsOrder { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKey">DataCloudflareRulesetRulesActionParametersCacheKey</a>

---


### DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference <a name="DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.property.eligible">Eligible</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.property.minimumFileSize">MinimumFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserve">DataCloudflareRulesetRulesActionParametersCacheReserve</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Eligible`<sup>Required</sup> <a name="Eligible" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.property.eligible"></a>

```csharp
public IResolvable Eligible { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MinimumFileSize`<sup>Required</sup> <a name="MinimumFileSize" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.property.minimumFileSize"></a>

```csharp
public double MinimumFileSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheReserve InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserve">DataCloudflareRulesetRulesActionParametersCacheReserve</a>

---


### DataCloudflareRulesetRulesActionParametersCookieFieldsList <a name="DataCloudflareRulesetRulesActionParametersCookieFieldsList" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCookieFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.get"></a>

```csharp
private DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference <a name="DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFields">DataCloudflareRulesetRulesActionParametersCookieFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCookieFields InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFields">DataCloudflareRulesetRulesActionParametersCookieFields</a>

---


### DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference <a name="DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.property.default">Default</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl">StatusCodeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList">DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtl">DataCloudflareRulesetRulesActionParametersEdgeTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.property.default"></a>

```csharp
public double Default { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `StatusCodeTtl`<sup>Required</sup> <a name="StatusCodeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList StatusCodeTtl { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList">DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersEdgeTtl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtl">DataCloudflareRulesetRulesActionParametersEdgeTtl</a>

---


### DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList <a name="DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.get"></a>

```csharp
private DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference <a name="DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange">StatusCodeRange</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference">DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeValue">StatusCodeValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl">DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusCodeRange`<sup>Required</sup> <a name="StatusCodeRange" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference StatusCodeRange { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference">DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference</a>

---

##### `StatusCodeValue`<sup>Required</sup> <a name="StatusCodeValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeValue"></a>

```csharp
public double StatusCodeValue { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl">DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>

---


### DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference <a name="DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from">From</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to">To</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from"></a>

```csharp
public double From { get; }
```

- *Type:* double

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to"></a>

```csharp
public double To { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>

---


### DataCloudflareRulesetRulesActionParametersFromListStructOutputReference <a name="DataCloudflareRulesetRulesActionParametersFromListStructOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersFromListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStruct">DataCloudflareRulesetRulesActionParametersFromListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersFromListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStruct">DataCloudflareRulesetRulesActionParametersFromListStruct</a>

---


### DataCloudflareRulesetRulesActionParametersFromValueOutputReference <a name="DataCloudflareRulesetRulesActionParametersFromValueOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersFromValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.property.preserveQueryString">PreserveQueryString</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.property.targetUrl">TargetUrl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference">DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValue">DataCloudflareRulesetRulesActionParametersFromValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreserveQueryString`<sup>Required</sup> <a name="PreserveQueryString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.property.preserveQueryString"></a>

```csharp
public IResolvable PreserveQueryString { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.property.targetUrl"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference TargetUrl { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference">DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersFromValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValue">DataCloudflareRulesetRulesActionParametersFromValue</a>

---


### DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference <a name="DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrl">DataCloudflareRulesetRulesActionParametersFromValueTargetUrl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersFromValueTargetUrl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueTargetUrl">DataCloudflareRulesetRulesActionParametersFromValueTargetUrl</a>

---


### DataCloudflareRulesetRulesActionParametersHeadersMap <a name="DataCloudflareRulesetRulesActionParametersHeadersMap" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersHeadersMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.get"></a>

```csharp
private DataCloudflareRulesetRulesActionParametersHeadersOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetRulesActionParametersHeadersOutputReference <a name="DataCloudflareRulesetRulesActionParametersHeadersOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeaders">DataCloudflareRulesetRulesActionParametersHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersHeaders InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeaders">DataCloudflareRulesetRulesActionParametersHeaders</a>

---


### DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference <a name="DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedData">DataCloudflareRulesetRulesActionParametersMatchedData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersMatchedData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedData">DataCloudflareRulesetRulesActionParametersMatchedData</a>

---


### DataCloudflareRulesetRulesActionParametersOriginOutputReference <a name="DataCloudflareRulesetRulesActionParametersOriginOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersOriginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOrigin">DataCloudflareRulesetRulesActionParametersOrigin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersOrigin InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOrigin">DataCloudflareRulesetRulesActionParametersOrigin</a>

---


### DataCloudflareRulesetRulesActionParametersOutputReference <a name="DataCloudflareRulesetRulesActionParametersOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.additionalCacheablePorts">AdditionalCacheablePorts</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.algorithms">Algorithms</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList">DataCloudflareRulesetRulesActionParametersAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.automaticHttpsRewrites">AutomaticHttpsRewrites</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.autominify">Autominify</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference">DataCloudflareRulesetRulesActionParametersAutominifyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.bic">Bic</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.browserTtl">BrowserTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference">DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.cache">Cache</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.cacheKey">CacheKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.cacheReserve">CacheReserve</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference">DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.cookieFields">CookieFields</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList">DataCloudflareRulesetRulesActionParametersCookieFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.disableApps">DisableApps</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.disableRum">DisableRum</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.disableZaraz">DisableZaraz</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.edgeTtl">EdgeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference">DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.emailObfuscation">EmailObfuscation</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.fonts">Fonts</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.fromList">FromList</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference">DataCloudflareRulesetRulesActionParametersFromListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.fromValue">FromValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference">DataCloudflareRulesetRulesActionParametersFromValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap">DataCloudflareRulesetRulesActionParametersHeadersMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.hostHeader">HostHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.hotlinkProtection">HotlinkProtection</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.increment">Increment</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.matchedData">MatchedData</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference">DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.mirage">Mirage</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.opportunisticEncryption">OpportunisticEncryption</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.origin">Origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference">DataCloudflareRulesetRulesActionParametersOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.originCacheControl">OriginCacheControl</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.originErrorPagePassthru">OriginErrorPagePassthru</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference">DataCloudflareRulesetRulesActionParametersOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.phases">Phases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.polish">Polish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.products">Products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.readTimeout">ReadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.requestFields">RequestFields</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList">DataCloudflareRulesetRulesActionParametersRequestFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.respectStrongEtags">RespectStrongEtags</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.response">Response</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference">DataCloudflareRulesetRulesActionParametersResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.responseFields">ResponseFields</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList">DataCloudflareRulesetRulesActionParametersResponseFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.rocketLoader">RocketLoader</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.rules">Rules</a></code> | <code>HashiCorp.Cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.ruleset">Ruleset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.rulesets">Rulesets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.serverSideExcludes">ServerSideExcludes</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.serveStale">ServeStale</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference">DataCloudflareRulesetRulesActionParametersServeStaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.sni">Sni</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference">DataCloudflareRulesetRulesActionParametersSniOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.ssl">Ssl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.sxg">Sxg</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.uri">Uri</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference">DataCloudflareRulesetRulesActionParametersUriOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParameters">DataCloudflareRulesetRulesActionParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalCacheablePorts`<sup>Required</sup> <a name="AdditionalCacheablePorts" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.additionalCacheablePorts"></a>

```csharp
public double[] AdditionalCacheablePorts { get; }
```

- *Type:* double[]

---

##### `Algorithms`<sup>Required</sup> <a name="Algorithms" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.algorithms"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersAlgorithmsList Algorithms { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAlgorithmsList">DataCloudflareRulesetRulesActionParametersAlgorithmsList</a>

---

##### `AutomaticHttpsRewrites`<sup>Required</sup> <a name="AutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.automaticHttpsRewrites"></a>

```csharp
public IResolvable AutomaticHttpsRewrites { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Autominify`<sup>Required</sup> <a name="Autominify" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.autominify"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersAutominifyOutputReference Autominify { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference">DataCloudflareRulesetRulesActionParametersAutominifyOutputReference</a>

---

##### `Bic`<sup>Required</sup> <a name="Bic" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.bic"></a>

```csharp
public IResolvable Bic { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BrowserTtl`<sup>Required</sup> <a name="BrowserTtl" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.browserTtl"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference BrowserTtl { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference">DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference</a>

---

##### `Cache`<sup>Required</sup> <a name="Cache" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.cache"></a>

```csharp
public IResolvable Cache { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CacheKey`<sup>Required</sup> <a name="CacheKey" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.cacheKey"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference CacheKey { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference">DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference</a>

---

##### `CacheReserve`<sup>Required</sup> <a name="CacheReserve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.cacheReserve"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference CacheReserve { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference">DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference</a>

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `CookieFields`<sup>Required</sup> <a name="CookieFields" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.cookieFields"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersCookieFieldsList CookieFields { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersCookieFieldsList">DataCloudflareRulesetRulesActionParametersCookieFieldsList</a>

---

##### `DisableApps`<sup>Required</sup> <a name="DisableApps" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.disableApps"></a>

```csharp
public IResolvable DisableApps { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DisableRum`<sup>Required</sup> <a name="DisableRum" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.disableRum"></a>

```csharp
public IResolvable DisableRum { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DisableZaraz`<sup>Required</sup> <a name="DisableZaraz" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.disableZaraz"></a>

```csharp
public IResolvable DisableZaraz { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EdgeTtl`<sup>Required</sup> <a name="EdgeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.edgeTtl"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference EdgeTtl { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference">DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference</a>

---

##### `EmailObfuscation`<sup>Required</sup> <a name="EmailObfuscation" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.emailObfuscation"></a>

```csharp
public IResolvable EmailObfuscation { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Fonts`<sup>Required</sup> <a name="Fonts" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.fonts"></a>

```csharp
public IResolvable Fonts { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FromList`<sup>Required</sup> <a name="FromList" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.fromList"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersFromListStructOutputReference FromList { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference">DataCloudflareRulesetRulesActionParametersFromListStructOutputReference</a>

---

##### `FromValue`<sup>Required</sup> <a name="FromValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.fromValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersFromValueOutputReference FromValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersFromValueOutputReference">DataCloudflareRulesetRulesActionParametersFromValueOutputReference</a>

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.headers"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersHeadersMap Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersHeadersMap">DataCloudflareRulesetRulesActionParametersHeadersMap</a>

---

##### `HostHeader`<sup>Required</sup> <a name="HostHeader" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.hostHeader"></a>

```csharp
public string HostHeader { get; }
```

- *Type:* string

---

##### `HotlinkProtection`<sup>Required</sup> <a name="HotlinkProtection" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.hotlinkProtection"></a>

```csharp
public IResolvable HotlinkProtection { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Increment`<sup>Required</sup> <a name="Increment" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.increment"></a>

```csharp
public double Increment { get; }
```

- *Type:* double

---

##### `MatchedData`<sup>Required</sup> <a name="MatchedData" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.matchedData"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference MatchedData { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference">DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference</a>

---

##### `Mirage`<sup>Required</sup> <a name="Mirage" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.mirage"></a>

```csharp
public IResolvable Mirage { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OpportunisticEncryption`<sup>Required</sup> <a name="OpportunisticEncryption" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.opportunisticEncryption"></a>

```csharp
public IResolvable OpportunisticEncryption { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.origin"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersOriginOutputReference Origin { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOriginOutputReference">DataCloudflareRulesetRulesActionParametersOriginOutputReference</a>

---

##### `OriginCacheControl`<sup>Required</sup> <a name="OriginCacheControl" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.originCacheControl"></a>

```csharp
public IResolvable OriginCacheControl { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OriginErrorPagePassthru`<sup>Required</sup> <a name="OriginErrorPagePassthru" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.originErrorPagePassthru"></a>

```csharp
public IResolvable OriginErrorPagePassthru { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.overrides"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersOverridesOutputReference Overrides { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference">DataCloudflareRulesetRulesActionParametersOverridesOutputReference</a>

---

##### `Phases`<sup>Required</sup> <a name="Phases" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.phases"></a>

```csharp
public string[] Phases { get; }
```

- *Type:* string[]

---

##### `Polish`<sup>Required</sup> <a name="Polish" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.polish"></a>

```csharp
public string Polish { get; }
```

- *Type:* string

---

##### `Products`<sup>Required</sup> <a name="Products" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.products"></a>

```csharp
public string[] Products { get; }
```

- *Type:* string[]

---

##### `ReadTimeout`<sup>Required</sup> <a name="ReadTimeout" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.readTimeout"></a>

```csharp
public double ReadTimeout { get; }
```

- *Type:* double

---

##### `RequestFields`<sup>Required</sup> <a name="RequestFields" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.requestFields"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersRequestFieldsList RequestFields { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList">DataCloudflareRulesetRulesActionParametersRequestFieldsList</a>

---

##### `RespectStrongEtags`<sup>Required</sup> <a name="RespectStrongEtags" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.respectStrongEtags"></a>

```csharp
public IResolvable RespectStrongEtags { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.response"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersResponseOutputReference Response { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference">DataCloudflareRulesetRulesActionParametersResponseOutputReference</a>

---

##### `ResponseFields`<sup>Required</sup> <a name="ResponseFields" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.responseFields"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersResponseFieldsList ResponseFields { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList">DataCloudflareRulesetRulesActionParametersResponseFieldsList</a>

---

##### `RocketLoader`<sup>Required</sup> <a name="RocketLoader" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.rocketLoader"></a>

```csharp
public IResolvable RocketLoader { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.rules"></a>

```csharp
public StringListMap Rules { get; }
```

- *Type:* HashiCorp.Cdktf.StringListMap

---

##### `Ruleset`<sup>Required</sup> <a name="Ruleset" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.ruleset"></a>

```csharp
public string Ruleset { get; }
```

- *Type:* string

---

##### `Rulesets`<sup>Required</sup> <a name="Rulesets" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.rulesets"></a>

```csharp
public string[] Rulesets { get; }
```

- *Type:* string[]

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; }
```

- *Type:* string

---

##### `ServerSideExcludes`<sup>Required</sup> <a name="ServerSideExcludes" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.serverSideExcludes"></a>

```csharp
public IResolvable ServerSideExcludes { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ServeStale`<sup>Required</sup> <a name="ServeStale" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.serveStale"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersServeStaleOutputReference ServeStale { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference">DataCloudflareRulesetRulesActionParametersServeStaleOutputReference</a>

---

##### `Sni`<sup>Required</sup> <a name="Sni" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.sni"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersSniOutputReference Sni { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference">DataCloudflareRulesetRulesActionParametersSniOutputReference</a>

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.ssl"></a>

```csharp
public string Ssl { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `Sxg`<sup>Required</sup> <a name="Sxg" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.sxg"></a>

```csharp
public IResolvable Sxg { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.uri"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersUriOutputReference Uri { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference">DataCloudflareRulesetRulesActionParametersUriOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParameters">DataCloudflareRulesetRulesActionParameters</a>

---


### DataCloudflareRulesetRulesActionParametersOverridesCategoriesList <a name="DataCloudflareRulesetRulesActionParametersOverridesCategoriesList" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersOverridesCategoriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.get"></a>

```csharp
private DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference <a name="DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.property.sensitivityLevel">SensitivityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategories">DataCloudflareRulesetRulesActionParametersOverridesCategories</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SensitivityLevel`<sup>Required</sup> <a name="SensitivityLevel" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.property.sensitivityLevel"></a>

```csharp
public string SensitivityLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersOverridesCategories InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategories">DataCloudflareRulesetRulesActionParametersOverridesCategories</a>

---


### DataCloudflareRulesetRulesActionParametersOverridesOutputReference <a name="DataCloudflareRulesetRulesActionParametersOverridesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.categories">Categories</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList">DataCloudflareRulesetRulesActionParametersOverridesCategoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList">DataCloudflareRulesetRulesActionParametersOverridesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevel">SensitivityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverrides">DataCloudflareRulesetRulesActionParametersOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.categories"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersOverridesCategoriesList Categories { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList">DataCloudflareRulesetRulesActionParametersOverridesCategoriesList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.rules"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersOverridesRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList">DataCloudflareRulesetRulesActionParametersOverridesRulesList</a>

---

##### `SensitivityLevel`<sup>Required</sup> <a name="SensitivityLevel" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevel"></a>

```csharp
public string SensitivityLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersOverrides InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverrides">DataCloudflareRulesetRulesActionParametersOverrides</a>

---


### DataCloudflareRulesetRulesActionParametersOverridesRulesList <a name="DataCloudflareRulesetRulesActionParametersOverridesRulesList" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersOverridesRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.get"></a>

```csharp
private DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference <a name="DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold">ScoreThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel">SensitivityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRules">DataCloudflareRulesetRulesActionParametersOverridesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ScoreThreshold`<sup>Required</sup> <a name="ScoreThreshold" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold"></a>

```csharp
public double ScoreThreshold { get; }
```

- *Type:* double

---

##### `SensitivityLevel`<sup>Required</sup> <a name="SensitivityLevel" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel"></a>

```csharp
public string SensitivityLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersOverridesRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOverridesRules">DataCloudflareRulesetRulesActionParametersOverridesRules</a>

---


### DataCloudflareRulesetRulesActionParametersRequestFieldsList <a name="DataCloudflareRulesetRulesActionParametersRequestFieldsList" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersRequestFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.get"></a>

```csharp
private DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference <a name="DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFields">DataCloudflareRulesetRulesActionParametersRequestFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersRequestFields InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersRequestFields">DataCloudflareRulesetRulesActionParametersRequestFields</a>

---


### DataCloudflareRulesetRulesActionParametersResponseFieldsList <a name="DataCloudflareRulesetRulesActionParametersResponseFieldsList" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersResponseFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.get"></a>

```csharp
private DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference <a name="DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFields">DataCloudflareRulesetRulesActionParametersResponseFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersResponseFields InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseFields">DataCloudflareRulesetRulesActionParametersResponseFields</a>

---


### DataCloudflareRulesetRulesActionParametersResponseOutputReference <a name="DataCloudflareRulesetRulesActionParametersResponseOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponse">DataCloudflareRulesetRulesActionParametersResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponseOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersResponse">DataCloudflareRulesetRulesActionParametersResponse</a>

---


### DataCloudflareRulesetRulesActionParametersServeStaleOutputReference <a name="DataCloudflareRulesetRulesActionParametersServeStaleOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersServeStaleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating">DisableStaleWhileUpdating</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStale">DataCloudflareRulesetRulesActionParametersServeStale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableStaleWhileUpdating`<sup>Required</sup> <a name="DisableStaleWhileUpdating" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating"></a>

```csharp
public IResolvable DisableStaleWhileUpdating { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersServeStale InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersServeStale">DataCloudflareRulesetRulesActionParametersServeStale</a>

---


### DataCloudflareRulesetRulesActionParametersSniOutputReference <a name="DataCloudflareRulesetRulesActionParametersSniOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersSniOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSni">DataCloudflareRulesetRulesActionParametersSni</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSniOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersSni InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersSni">DataCloudflareRulesetRulesActionParametersSni</a>

---


### DataCloudflareRulesetRulesActionParametersUriOutputReference <a name="DataCloudflareRulesetRulesActionParametersUriOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersUriOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.property.path">Path</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference">DataCloudflareRulesetRulesActionParametersUriPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.property.query">Query</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference">DataCloudflareRulesetRulesActionParametersUriQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUri">DataCloudflareRulesetRulesActionParametersUri</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.property.path"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersUriPathOutputReference Path { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference">DataCloudflareRulesetRulesActionParametersUriPathOutputReference</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.property.query"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersUriQueryOutputReference Query { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference">DataCloudflareRulesetRulesActionParametersUriQueryOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersUri InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUri">DataCloudflareRulesetRulesActionParametersUri</a>

---


### DataCloudflareRulesetRulesActionParametersUriPathOutputReference <a name="DataCloudflareRulesetRulesActionParametersUriPathOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersUriPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPath">DataCloudflareRulesetRulesActionParametersUriPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPathOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersUriPath InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriPath">DataCloudflareRulesetRulesActionParametersUriPath</a>

---


### DataCloudflareRulesetRulesActionParametersUriQueryOutputReference <a name="DataCloudflareRulesetRulesActionParametersUriQueryOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesActionParametersUriQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQuery">DataCloudflareRulesetRulesActionParametersUriQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersUriQuery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersUriQuery">DataCloudflareRulesetRulesActionParametersUriQuery</a>

---


### DataCloudflareRulesetRulesExposedCredentialCheckOutputReference <a name="DataCloudflareRulesetRulesExposedCredentialCheckOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesExposedCredentialCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.property.passwordExpression">PasswordExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.property.usernameExpression">UsernameExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheck">DataCloudflareRulesetRulesExposedCredentialCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordExpression`<sup>Required</sup> <a name="PasswordExpression" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.property.passwordExpression"></a>

```csharp
public string PasswordExpression { get; }
```

- *Type:* string

---

##### `UsernameExpression`<sup>Required</sup> <a name="UsernameExpression" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.property.usernameExpression"></a>

```csharp
public string UsernameExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesExposedCredentialCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheck">DataCloudflareRulesetRulesExposedCredentialCheck</a>

---


### DataCloudflareRulesetRulesList <a name="DataCloudflareRulesetRulesList" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.get"></a>

```csharp
private DataCloudflareRulesetRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetRulesLoggingOutputReference <a name="DataCloudflareRulesetRulesLoggingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLogging">DataCloudflareRulesetRulesLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLogging">DataCloudflareRulesetRulesLogging</a>

---


### DataCloudflareRulesetRulesOutputReference <a name="DataCloudflareRulesetRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.actionParameters">ActionParameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference">DataCloudflareRulesetRulesActionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.categories">Categories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.exposedCredentialCheck">ExposedCredentialCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference">DataCloudflareRulesetRulesExposedCredentialCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference">DataCloudflareRulesetRulesLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.ratelimit">Ratelimit</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference">DataCloudflareRulesetRulesRatelimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRules">DataCloudflareRulesetRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `ActionParameters`<sup>Required</sup> <a name="ActionParameters" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.actionParameters"></a>

```csharp
public DataCloudflareRulesetRulesActionParametersOutputReference ActionParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesActionParametersOutputReference">DataCloudflareRulesetRulesActionParametersOutputReference</a>

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.categories"></a>

```csharp
public string[] Categories { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ExposedCredentialCheck`<sup>Required</sup> <a name="ExposedCredentialCheck" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.exposedCredentialCheck"></a>

```csharp
public DataCloudflareRulesetRulesExposedCredentialCheckOutputReference ExposedCredentialCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference">DataCloudflareRulesetRulesExposedCredentialCheckOutputReference</a>

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.logging"></a>

```csharp
public DataCloudflareRulesetRulesLoggingOutputReference Logging { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesLoggingOutputReference">DataCloudflareRulesetRulesLoggingOutputReference</a>

---

##### `Ratelimit`<sup>Required</sup> <a name="Ratelimit" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.ratelimit"></a>

```csharp
public DataCloudflareRulesetRulesRatelimitOutputReference Ratelimit { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference">DataCloudflareRulesetRulesRatelimitOutputReference</a>

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRules">DataCloudflareRulesetRules</a>

---


### DataCloudflareRulesetRulesRatelimitOutputReference <a name="DataCloudflareRulesetRulesRatelimitOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetRulesRatelimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.characteristics">Characteristics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.countingExpression">CountingExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.mitigationTimeout">MitigationTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.requestsPerPeriod">RequestsPerPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.requestsToOrigin">RequestsToOrigin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.scorePerPeriod">ScorePerPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.scoreResponseHeaderName">ScoreResponseHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimit">DataCloudflareRulesetRulesRatelimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Characteristics`<sup>Required</sup> <a name="Characteristics" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.characteristics"></a>

```csharp
public string[] Characteristics { get; }
```

- *Type:* string[]

---

##### `CountingExpression`<sup>Required</sup> <a name="CountingExpression" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.countingExpression"></a>

```csharp
public string CountingExpression { get; }
```

- *Type:* string

---

##### `MitigationTimeout`<sup>Required</sup> <a name="MitigationTimeout" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.mitigationTimeout"></a>

```csharp
public double MitigationTimeout { get; }
```

- *Type:* double

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `RequestsPerPeriod`<sup>Required</sup> <a name="RequestsPerPeriod" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.requestsPerPeriod"></a>

```csharp
public double RequestsPerPeriod { get; }
```

- *Type:* double

---

##### `RequestsToOrigin`<sup>Required</sup> <a name="RequestsToOrigin" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.requestsToOrigin"></a>

```csharp
public IResolvable RequestsToOrigin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ScorePerPeriod`<sup>Required</sup> <a name="ScorePerPeriod" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.scorePerPeriod"></a>

```csharp
public double ScorePerPeriod { get; }
```

- *Type:* double

---

##### `ScoreResponseHeaderName`<sup>Required</sup> <a name="ScoreResponseHeaderName" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.scoreResponseHeaderName"></a>

```csharp
public string ScoreResponseHeaderName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimitOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetRulesRatelimit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRuleset.DataCloudflareRulesetRulesRatelimit">DataCloudflareRulesetRulesRatelimit</a>

---



