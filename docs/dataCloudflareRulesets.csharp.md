# `dataCloudflareRulesets` Submodule <a name="`dataCloudflareRulesets` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareRulesets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareRulesets <a name="DataCloudflareRulesets" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/data-sources/rulesets cloudflare_rulesets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesets(Construct Scope, string Id, DataCloudflareRulesetsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig">DataCloudflareRulesetsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig">DataCloudflareRulesetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetIncludeRules">ResetIncludeRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareRulesetsFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeRules` <a name="ResetIncludeRules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetIncludeRules"></a>

```csharp
private void ResetIncludeRules()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareRulesets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareRulesets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareRulesets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareRulesets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareRulesets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareRulesets resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareRulesets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareRulesets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/data-sources/rulesets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareRulesets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference">DataCloudflareRulesetsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.rulesets">Rulesets</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList">DataCloudflareRulesetsRulesetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.includeRulesInput">IncludeRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.includeRules">IncludeRules</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.filter"></a>

```csharp
public DataCloudflareRulesetsFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference">DataCloudflareRulesetsFilterOutputReference</a>

---

##### `Rulesets`<sup>Required</sup> <a name="Rulesets" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.rulesets"></a>

```csharp
public DataCloudflareRulesetsRulesetsList Rulesets { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList">DataCloudflareRulesetsRulesetsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.filterInput"></a>

```csharp
public DataCloudflareRulesetsFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeRulesInput`<sup>Optional</sup> <a name="IncludeRulesInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.includeRulesInput"></a>

```csharp
public object IncludeRulesInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeRules`<sup>Required</sup> <a name="IncludeRules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.includeRules"></a>

```csharp
public object IncludeRules { get; }
```

- *Type:* object

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareRulesetsConfig <a name="DataCloudflareRulesetsConfig" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId = null,
    DataCloudflareRulesetsFilter Filter = null,
    string Id = null,
    object IncludeRules = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. Must provide only one of `zone_id`, `account_id`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/data-sources/rulesets#id DataCloudflareRulesets#id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.includeRules">IncludeRules</a></code> | <code>object</code> | Include rule data in response. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. Must provide only one of `zone_id`, `account_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource. Must provide only one of `zone_id`, `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/data-sources/rulesets#account_id DataCloudflareRulesets#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.filter"></a>

```csharp
public DataCloudflareRulesetsFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/data-sources/rulesets#filter DataCloudflareRulesets#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/data-sources/rulesets#id DataCloudflareRulesets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeRules`<sup>Optional</sup> <a name="IncludeRules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.includeRules"></a>

```csharp
public object IncludeRules { get; set; }
```

- *Type:* object

Include rule data in response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/data-sources/rulesets#include_rules DataCloudflareRulesets#include_rules}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. Must provide only one of `zone_id`, `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/data-sources/rulesets#zone_id DataCloudflareRulesets#zone_id}

---

### DataCloudflareRulesetsFilter <a name="DataCloudflareRulesetsFilter" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsFilter {
    string Id = null,
    string Kind = null,
    string Name = null,
    string Phase = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.id">Id</a></code> | <code>string</code> | The ID of the Ruleset to target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.kind">Kind</a></code> | <code>string</code> | Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `zone`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.name">Name</a></code> | <code>string</code> | Name of the ruleset. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.phase">Phase</a></code> | <code>string</code> | Point in the request/response lifecycle where the ruleset will be created. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.version">Version</a></code> | <code>string</code> | Version of the ruleset to filter on. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the Ruleset to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/data-sources/rulesets#id DataCloudflareRulesets#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `zone`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/data-sources/rulesets#kind DataCloudflareRulesets#kind}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/data-sources/rulesets#name DataCloudflareRulesets#name}

---

##### `Phase`<sup>Optional</sup> <a name="Phase" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.phase"></a>

```csharp
public string Phase { get; set; }
```

- *Type:* string

Point in the request/response lifecycle where the ruleset will be created.

Available values: `ddos_l4`, `ddos_l7`, `http_config_settings`, `http_custom_errors`, `http_log_custom_fields`, `http_ratelimit`, `http_request_cache_settings`, `http_request_dynamic_redirect`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_origin`, `http_request_redirect`, `http_request_sanitize`, `http_request_sbfm`, `http_request_transform`, `http_response_compression`, `http_response_firewall_managed`, `http_response_headers_transform`, `magic_transit`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/data-sources/rulesets#phase DataCloudflareRulesets#phase}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Version of the ruleset to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/data-sources/rulesets#version DataCloudflareRulesets#version}

---

### DataCloudflareRulesetsRulesets <a name="DataCloudflareRulesetsRulesets" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesets {

};
```


### DataCloudflareRulesetsRulesetsRules <a name="DataCloudflareRulesetsRulesetsRules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRules {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParameters <a name="DataCloudflareRulesetsRulesetsRulesActionParameters" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParameters {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersAutominify <a name="DataCloudflareRulesetsRulesetsRulesActionParametersAutominify" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominify.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersAutominify {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl <a name="DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValue <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersFromValue {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersHeaders <a name="DataCloudflareRulesetsRulesetsRulesActionParametersHeaders" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersHeaders {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData <a name="DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersOrigin <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOrigin" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOrigin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersOrigin {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersOverrides <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverrides" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersOverrides {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersResponse <a name="DataCloudflareRulesetsRulesetsRulesActionParametersResponse" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersResponse {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersServeStale <a name="DataCloudflareRulesetsRulesetsRulesActionParametersServeStale" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStale.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersServeStale {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersSni <a name="DataCloudflareRulesetsRulesetsRulesActionParametersSni" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSni"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSni.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersSni {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersUri <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUri" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUri.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersUri {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersUriPath <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriPath" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersUriPath {

};
```


### DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery {

};
```


### DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck <a name="DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck {

};
```


### DataCloudflareRulesetsRulesetsRulesLogging <a name="DataCloudflareRulesetsRulesetsRulesLogging" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesLogging {

};
```


### DataCloudflareRulesetsRulesetsRulesRatelimit <a name="DataCloudflareRulesetsRulesetsRulesRatelimit" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesRatelimit {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareRulesetsFilterOutputReference <a name="DataCloudflareRulesetsFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetPhase">ResetPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPhase` <a name="ResetPhase" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetPhase"></a>

```csharp
private void ResetPhase()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.phaseInput">PhaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.phase">Phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PhaseInput`<sup>Optional</sup> <a name="PhaseInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.phaseInput"></a>

```csharp
public string PhaseInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.phase"></a>

```csharp
public string Phase { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a>

---


### DataCloudflareRulesetsRulesetsList <a name="DataCloudflareRulesetsRulesetsList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsOutputReference <a name="DataCloudflareRulesetsRulesetsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.phase">Phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList">DataCloudflareRulesetsRulesetsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesets">DataCloudflareRulesetsRulesets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.phase"></a>

```csharp
public string Phase { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.rules"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList">DataCloudflareRulesetsRulesetsRulesList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesets">DataCloudflareRulesetsRulesets</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.css">Css</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.html">Html</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.js">Js</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominify">DataCloudflareRulesetsRulesetsRulesActionParametersAutominify</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Css`<sup>Required</sup> <a name="Css" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.css"></a>

```csharp
public IResolvable Css { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.html"></a>

```csharp
public IResolvable Html { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Js`<sup>Required</sup> <a name="Js" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.js"></a>

```csharp
public IResolvable Js { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersAutominify InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominify">DataCloudflareRulesetsRulesetsRulesActionParametersAutominify</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.default">Default</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl">DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.default"></a>

```csharp
public double Default { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl">DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence">CheckPresence</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CheckPresence`<sup>Required</sup> <a name="CheckPresence" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence"></a>

```csharp
public string[] CheckPresence { get; }
```

- *Type:* string[]

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence">CheckPresence</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.contains">Contains</a></code> | <code>HashiCorp.Cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin">ExcludeOrigin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CheckPresence`<sup>Required</sup> <a name="CheckPresence" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence"></a>

```csharp
public string[] CheckPresence { get; }
```

- *Type:* string[]

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.contains"></a>

```csharp
public StringListMap Contains { get; }
```

- *Type:* HashiCorp.Cdktf.StringListMap

---

##### `ExcludeOrigin`<sup>Required</sup> <a name="ExcludeOrigin" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin"></a>

```csharp
public IResolvable ExcludeOrigin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved">Resolved</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resolved`<sup>Required</sup> <a name="Resolved" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved"></a>

```csharp
public IResolvable Resolved { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie">Cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.host">Host</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString">QueryString</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.user">User</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cookie`<sup>Required</sup> <a name="Cookie" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList Cookie { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.header"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList Header { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList</a>

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.host"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList Host { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList</a>

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList QueryString { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.user"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList User { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude">Exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude"></a>

```csharp
public string[] Exclude { get; }
```

- *Type:* string[]

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType">DeviceType</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo">Geo</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang">Lang</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType"></a>

```csharp
public IResolvable DeviceType { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo"></a>

```csharp
public IResolvable Geo { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Lang`<sup>Required</sup> <a name="Lang" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang"></a>

```csharp
public IResolvable Lang { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType">CacheByDeviceType</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor">CacheDeceptionArmor</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.customKey">CustomKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder">IgnoreQueryStringsOrder</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheByDeviceType`<sup>Required</sup> <a name="CacheByDeviceType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType"></a>

```csharp
public IResolvable CacheByDeviceType { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CacheDeceptionArmor`<sup>Required</sup> <a name="CacheDeceptionArmor" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor"></a>

```csharp
public IResolvable CacheDeceptionArmor { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CustomKey`<sup>Required</sup> <a name="CustomKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.customKey"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList CustomKey { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList</a>

---

##### `IgnoreQueryStringsOrder`<sup>Required</sup> <a name="IgnoreQueryStringsOrder" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder"></a>

```csharp
public IResolvable IgnoreQueryStringsOrder { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.eligible">Eligible</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.minimumFileSize">MinimumFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve">DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Eligible`<sup>Required</sup> <a name="Eligible" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.eligible"></a>

```csharp
public IResolvable Eligible { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MinimumFileSize`<sup>Required</sup> <a name="MinimumFileSize" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.minimumFileSize"></a>

```csharp
public double MinimumFileSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve">DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.default">Default</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl">StatusCodeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.default"></a>

```csharp
public double Default { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `StatusCodeTtl`<sup>Required</sup> <a name="StatusCodeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList StatusCodeTtl { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange">StatusCodeRange</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `StatusCodeRange`<sup>Required</sup> <a name="StatusCodeRange" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList StatusCodeRange { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from">From</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to">To</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from"></a>

```csharp
public double From { get; }
```

- *Type:* double

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to"></a>

```csharp
public double To { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct">DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct">DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.preserveQueryString">PreserveQueryString</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.targetUrl">TargetUrl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValue">DataCloudflareRulesetsRulesetsRulesActionParametersFromValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreserveQueryString`<sup>Required</sup> <a name="PreserveQueryString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.preserveQueryString"></a>

```csharp
public IResolvable PreserveQueryString { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.targetUrl"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList TargetUrl { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersFromValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValue">DataCloudflareRulesetsRulesetsRulesActionParametersFromValue</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeaders">DataCloudflareRulesetsRulesetsRulesActionParametersHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersHeaders InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeaders">DataCloudflareRulesetsRulesetsRulesActionParametersHeaders</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData">DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData">DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOriginList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOriginList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersOriginList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOrigin">DataCloudflareRulesetsRulesetsRulesActionParametersOrigin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersOrigin InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOrigin">DataCloudflareRulesetsRulesetsRulesActionParametersOrigin</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.additionalCacheablePorts">AdditionalCacheablePorts</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.automaticHttpsRewrites">AutomaticHttpsRewrites</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.autominify">Autominify</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList">DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.bic">Bic</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.browserTtl">BrowserTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cache">Cache</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cacheKey">CacheKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cacheReserve">CacheReserve</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cookieFields">CookieFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableApps">DisableApps</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableRailgun">DisableRailgun</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableZaraz">DisableZaraz</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.edgeTtl">EdgeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.emailObfuscation">EmailObfuscation</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fromList">FromList</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList">DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fromValue">FromValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList">DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.hostHeader">HostHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.hotlinkProtection">HotlinkProtection</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.increment">Increment</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.matchedData">MatchedData</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList">DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.mirage">Mirage</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.opportunisticEncryption">OpportunisticEncryption</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.origin">Origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList">DataCloudflareRulesetsRulesetsRulesActionParametersOriginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.originCacheControl">OriginCacheControl</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.originErrorPagePassthru">OriginErrorPagePassthru</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.phases">Phases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.polish">Polish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.products">Products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.readTimeout">ReadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.requestFields">RequestFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.respectStrongEtags">RespectStrongEtags</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.response">Response</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList">DataCloudflareRulesetsRulesetsRulesActionParametersResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.responseFields">ResponseFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rocketLoader">RocketLoader</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rules">Rules</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.ruleset">Ruleset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rulesets">Rulesets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.serverSideExcludes">ServerSideExcludes</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.serveStale">ServeStale</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList">DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.sni">Sni</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList">DataCloudflareRulesetsRulesetsRulesActionParametersSniList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.ssl">Ssl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.sxg">Sxg</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.uri">Uri</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList">DataCloudflareRulesetsRulesetsRulesActionParametersUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParameters">DataCloudflareRulesetsRulesetsRulesActionParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalCacheablePorts`<sup>Required</sup> <a name="AdditionalCacheablePorts" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.additionalCacheablePorts"></a>

```csharp
public double[] AdditionalCacheablePorts { get; }
```

- *Type:* double[]

---

##### `AutomaticHttpsRewrites`<sup>Required</sup> <a name="AutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.automaticHttpsRewrites"></a>

```csharp
public IResolvable AutomaticHttpsRewrites { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Autominify`<sup>Required</sup> <a name="Autominify" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.autominify"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList Autominify { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList">DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList</a>

---

##### `Bic`<sup>Required</sup> <a name="Bic" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.bic"></a>

```csharp
public IResolvable Bic { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BrowserTtl`<sup>Required</sup> <a name="BrowserTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.browserTtl"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList BrowserTtl { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList</a>

---

##### `Cache`<sup>Required</sup> <a name="Cache" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cache"></a>

```csharp
public IResolvable Cache { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CacheKey`<sup>Required</sup> <a name="CacheKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cacheKey"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList CacheKey { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList</a>

---

##### `CacheReserve`<sup>Required</sup> <a name="CacheReserve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cacheReserve"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList CacheReserve { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList</a>

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `CookieFields`<sup>Required</sup> <a name="CookieFields" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cookieFields"></a>

```csharp
public string[] CookieFields { get; }
```

- *Type:* string[]

---

##### `DisableApps`<sup>Required</sup> <a name="DisableApps" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableApps"></a>

```csharp
public IResolvable DisableApps { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DisableRailgun`<sup>Required</sup> <a name="DisableRailgun" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableRailgun"></a>

```csharp
public IResolvable DisableRailgun { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DisableZaraz`<sup>Required</sup> <a name="DisableZaraz" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableZaraz"></a>

```csharp
public IResolvable DisableZaraz { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EdgeTtl`<sup>Required</sup> <a name="EdgeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.edgeTtl"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList EdgeTtl { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList</a>

---

##### `EmailObfuscation`<sup>Required</sup> <a name="EmailObfuscation" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.emailObfuscation"></a>

```csharp
public IResolvable EmailObfuscation { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FromList`<sup>Required</sup> <a name="FromList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fromList"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList FromList { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList">DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList</a>

---

##### `FromValue`<sup>Required</sup> <a name="FromValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fromValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList FromValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList</a>

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.headers"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList">DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList</a>

---

##### `HostHeader`<sup>Required</sup> <a name="HostHeader" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.hostHeader"></a>

```csharp
public string HostHeader { get; }
```

- *Type:* string

---

##### `HotlinkProtection`<sup>Required</sup> <a name="HotlinkProtection" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.hotlinkProtection"></a>

```csharp
public IResolvable HotlinkProtection { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Increment`<sup>Required</sup> <a name="Increment" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.increment"></a>

```csharp
public double Increment { get; }
```

- *Type:* double

---

##### `MatchedData`<sup>Required</sup> <a name="MatchedData" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.matchedData"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList MatchedData { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList">DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList</a>

---

##### `Mirage`<sup>Required</sup> <a name="Mirage" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.mirage"></a>

```csharp
public IResolvable Mirage { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OpportunisticEncryption`<sup>Required</sup> <a name="OpportunisticEncryption" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.opportunisticEncryption"></a>

```csharp
public IResolvable OpportunisticEncryption { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.origin"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersOriginList Origin { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList">DataCloudflareRulesetsRulesetsRulesActionParametersOriginList</a>

---

##### `OriginCacheControl`<sup>Required</sup> <a name="OriginCacheControl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.originCacheControl"></a>

```csharp
public IResolvable OriginCacheControl { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OriginErrorPagePassthru`<sup>Required</sup> <a name="OriginErrorPagePassthru" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.originErrorPagePassthru"></a>

```csharp
public IResolvable OriginErrorPagePassthru { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.overrides"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList Overrides { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList</a>

---

##### `Phases`<sup>Required</sup> <a name="Phases" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.phases"></a>

```csharp
public string[] Phases { get; }
```

- *Type:* string[]

---

##### `Polish`<sup>Required</sup> <a name="Polish" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.polish"></a>

```csharp
public string Polish { get; }
```

- *Type:* string

---

##### `Products`<sup>Required</sup> <a name="Products" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.products"></a>

```csharp
public string[] Products { get; }
```

- *Type:* string[]

---

##### `ReadTimeout`<sup>Required</sup> <a name="ReadTimeout" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.readTimeout"></a>

```csharp
public double ReadTimeout { get; }
```

- *Type:* double

---

##### `RequestFields`<sup>Required</sup> <a name="RequestFields" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.requestFields"></a>

```csharp
public string[] RequestFields { get; }
```

- *Type:* string[]

---

##### `RespectStrongEtags`<sup>Required</sup> <a name="RespectStrongEtags" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.respectStrongEtags"></a>

```csharp
public IResolvable RespectStrongEtags { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.response"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersResponseList Response { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList">DataCloudflareRulesetsRulesetsRulesActionParametersResponseList</a>

---

##### `ResponseFields`<sup>Required</sup> <a name="ResponseFields" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.responseFields"></a>

```csharp
public string[] ResponseFields { get; }
```

- *Type:* string[]

---

##### `RocketLoader`<sup>Required</sup> <a name="RocketLoader" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rocketLoader"></a>

```csharp
public IResolvable RocketLoader { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rules"></a>

```csharp
public StringMap Rules { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Ruleset`<sup>Required</sup> <a name="Ruleset" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.ruleset"></a>

```csharp
public string Ruleset { get; }
```

- *Type:* string

---

##### `Rulesets`<sup>Required</sup> <a name="Rulesets" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rulesets"></a>

```csharp
public string[] Rulesets { get; }
```

- *Type:* string[]

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; }
```

- *Type:* string

---

##### `ServerSideExcludes`<sup>Required</sup> <a name="ServerSideExcludes" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.serverSideExcludes"></a>

```csharp
public IResolvable ServerSideExcludes { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ServeStale`<sup>Required</sup> <a name="ServeStale" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.serveStale"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList ServeStale { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList">DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList</a>

---

##### `Sni`<sup>Required</sup> <a name="Sni" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.sni"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersSniList Sni { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList">DataCloudflareRulesetsRulesetsRulesActionParametersSniList</a>

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.ssl"></a>

```csharp
public string Ssl { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `Sxg`<sup>Required</sup> <a name="Sxg" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.sxg"></a>

```csharp
public IResolvable Sxg { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.uri"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersUriList Uri { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList">DataCloudflareRulesetsRulesetsRulesActionParametersUriList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParameters">DataCloudflareRulesetsRulesetsRulesActionParameters</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.categories">Categories</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.sensitivityLevel">SensitivityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverrides">DataCloudflareRulesetsRulesetsRulesActionParametersOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.categories"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList Categories { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.rules"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList</a>

---

##### `SensitivityLevel`<sup>Required</sup> <a name="SensitivityLevel" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.sensitivityLevel"></a>

```csharp
public string SensitivityLevel { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersOverrides InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverrides">DataCloudflareRulesetsRulesetsRulesActionParametersOverrides</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold">ScoreThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel">SensitivityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ScoreThreshold`<sup>Required</sup> <a name="ScoreThreshold" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold"></a>

```csharp
public double ScoreThreshold { get; }
```

- *Type:* double

---

##### `SensitivityLevel`<sup>Required</sup> <a name="SensitivityLevel" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel"></a>

```csharp
public string SensitivityLevel { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersResponseList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersResponseList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersResponseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponse">DataCloudflareRulesetsRulesetsRulesActionParametersResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponse">DataCloudflareRulesetsRulesetsRulesActionParametersResponse</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating">DisableStaleWhileUpdating</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStale">DataCloudflareRulesetsRulesetsRulesActionParametersServeStale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableStaleWhileUpdating`<sup>Required</sup> <a name="DisableStaleWhileUpdating" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating"></a>

```csharp
public IResolvable DisableStaleWhileUpdating { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersServeStale InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStale">DataCloudflareRulesetsRulesetsRulesActionParametersServeStale</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersSniList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersSniList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersSniList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSni">DataCloudflareRulesetsRulesetsRulesActionParametersSni</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersSni InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSni">DataCloudflareRulesetsRulesetsRulesActionParametersSni</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersUriList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.origin">Origin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.path">Path</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList">DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.query">Query</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList">DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUri">DataCloudflareRulesetsRulesetsRulesActionParametersUri</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.origin"></a>

```csharp
public IResolvable Origin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.path"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList Path { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList">DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.query"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList Query { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList">DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersUri InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUri">DataCloudflareRulesetsRulesetsRulesActionParametersUri</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPath">DataCloudflareRulesetsRulesetsRulesActionParametersUriPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersUriPath InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPath">DataCloudflareRulesetsRulesetsRulesActionParametersUriPath</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery">DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery">DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery</a>

---


### DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList <a name="DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference <a name="DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.passwordExpression">PasswordExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.usernameExpression">UsernameExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck">DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordExpression`<sup>Required</sup> <a name="PasswordExpression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.passwordExpression"></a>

```csharp
public string PasswordExpression { get; }
```

- *Type:* string

---

##### `UsernameExpression`<sup>Required</sup> <a name="UsernameExpression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.usernameExpression"></a>

```csharp
public string UsernameExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck">DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck</a>

---


### DataCloudflareRulesetsRulesetsRulesList <a name="DataCloudflareRulesetsRulesetsRulesList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesLoggingList <a name="DataCloudflareRulesetsRulesetsRulesLoggingList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesLoggingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesLoggingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesLoggingOutputReference <a name="DataCloudflareRulesetsRulesetsRulesLoggingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLogging">DataCloudflareRulesetsRulesetsRulesLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLogging">DataCloudflareRulesetsRulesetsRulesLogging</a>

---


### DataCloudflareRulesetsRulesetsRulesOutputReference <a name="DataCloudflareRulesetsRulesetsRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.actionParameters">ActionParameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList">DataCloudflareRulesetsRulesetsRulesActionParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.exposedCredentialCheck">ExposedCredentialCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList">DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList">DataCloudflareRulesetsRulesetsRulesLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.ratelimit">Ratelimit</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList">DataCloudflareRulesetsRulesetsRulesRatelimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRules">DataCloudflareRulesetsRulesetsRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `ActionParameters`<sup>Required</sup> <a name="ActionParameters" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.actionParameters"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesActionParametersList ActionParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList">DataCloudflareRulesetsRulesetsRulesActionParametersList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ExposedCredentialCheck`<sup>Required</sup> <a name="ExposedCredentialCheck" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.exposedCredentialCheck"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList ExposedCredentialCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList">DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList</a>

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.lastUpdated"></a>

```csharp
public string LastUpdated { get; }
```

- *Type:* string

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.logging"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesLoggingList Logging { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList">DataCloudflareRulesetsRulesetsRulesLoggingList</a>

---

##### `Ratelimit`<sup>Required</sup> <a name="Ratelimit" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.ratelimit"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesRatelimitList Ratelimit { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList">DataCloudflareRulesetsRulesetsRulesRatelimitList</a>

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRules">DataCloudflareRulesetsRulesetsRules</a>

---


### DataCloudflareRulesetsRulesetsRulesRatelimitList <a name="DataCloudflareRulesetsRulesetsRulesRatelimitList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesRatelimitList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.get"></a>

```csharp
private DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference <a name="DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.characteristics">Characteristics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.countingExpression">CountingExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.mitigationTimeout">MitigationTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.requestsPerPeriod">RequestsPerPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.requestsToOrigin">RequestsToOrigin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.scorePerPeriod">ScorePerPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.scoreResponseHeaderName">ScoreResponseHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimit">DataCloudflareRulesetsRulesetsRulesRatelimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Characteristics`<sup>Required</sup> <a name="Characteristics" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.characteristics"></a>

```csharp
public string[] Characteristics { get; }
```

- *Type:* string[]

---

##### `CountingExpression`<sup>Required</sup> <a name="CountingExpression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.countingExpression"></a>

```csharp
public string CountingExpression { get; }
```

- *Type:* string

---

##### `MitigationTimeout`<sup>Required</sup> <a name="MitigationTimeout" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.mitigationTimeout"></a>

```csharp
public double MitigationTimeout { get; }
```

- *Type:* double

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `RequestsPerPeriod`<sup>Required</sup> <a name="RequestsPerPeriod" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.requestsPerPeriod"></a>

```csharp
public double RequestsPerPeriod { get; }
```

- *Type:* double

---

##### `RequestsToOrigin`<sup>Required</sup> <a name="RequestsToOrigin" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.requestsToOrigin"></a>

```csharp
public IResolvable RequestsToOrigin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ScorePerPeriod`<sup>Required</sup> <a name="ScorePerPeriod" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.scorePerPeriod"></a>

```csharp
public double ScorePerPeriod { get; }
```

- *Type:* double

---

##### `ScoreResponseHeaderName`<sup>Required</sup> <a name="ScoreResponseHeaderName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.scoreResponseHeaderName"></a>

```csharp
public string ScoreResponseHeaderName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRulesetsRulesetsRulesRatelimit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimit">DataCloudflareRulesetsRulesetsRulesRatelimit</a>

---



