# `dataCloudflareMagicNetworkMonitoringRule` Submodule <a name="`dataCloudflareMagicNetworkMonitoringRule` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicNetworkMonitoringRule <a name="DataCloudflareMagicNetworkMonitoringRule" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicNetworkMonitoringRule(Construct Scope, string Id, DataCloudflareMagicNetworkMonitoringRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig">DataCloudflareMagicNetworkMonitoringRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig">DataCloudflareMagicNetworkMonitoringRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.resetRuleId">ResetRuleId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.resetRuleId"></a>

```csharp
private void ResetRuleId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicNetworkMonitoringRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicNetworkMonitoringRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicNetworkMonitoringRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicNetworkMonitoringRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareMagicNetworkMonitoringRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.automaticAdvertisement">AutomaticAdvertisement</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.bandwidthThreshold">BandwidthThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.packetThreshold">PacketThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.prefixes">Prefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.prefixMatch">PrefixMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.zscoreSensitivity">ZscoreSensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.zscoreTarget">ZscoreTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.ruleIdInput">RuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutomaticAdvertisement`<sup>Required</sup> <a name="AutomaticAdvertisement" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.automaticAdvertisement"></a>

```csharp
public IResolvable AutomaticAdvertisement { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BandwidthThreshold`<sup>Required</sup> <a name="BandwidthThreshold" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.bandwidthThreshold"></a>

```csharp
public double BandwidthThreshold { get; }
```

- *Type:* double

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PacketThreshold`<sup>Required</sup> <a name="PacketThreshold" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.packetThreshold"></a>

```csharp
public double PacketThreshold { get; }
```

- *Type:* double

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.prefixes"></a>

```csharp
public string[] Prefixes { get; }
```

- *Type:* string[]

---

##### `PrefixMatch`<sup>Required</sup> <a name="PrefixMatch" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.prefixMatch"></a>

```csharp
public string PrefixMatch { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ZscoreSensitivity`<sup>Required</sup> <a name="ZscoreSensitivity" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.zscoreSensitivity"></a>

```csharp
public string ZscoreSensitivity { get; }
```

- *Type:* string

---

##### `ZscoreTarget`<sup>Required</sup> <a name="ZscoreTarget" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.zscoreTarget"></a>

```csharp
public string ZscoreTarget { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.ruleIdInput"></a>

```csharp
public string RuleIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicNetworkMonitoringRuleConfig <a name="DataCloudflareMagicNetworkMonitoringRuleConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicNetworkMonitoringRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string RuleId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_network_monitoring_rule#account_id DataCloudflareMagicNetworkMonitoringRule#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.ruleId">RuleId</a></code> | <code>string</code> | The id of the rule. Must be unique. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_network_monitoring_rule#account_id DataCloudflareMagicNetworkMonitoringRule#account_id}.

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRule.DataCloudflareMagicNetworkMonitoringRuleConfig.property.ruleId"></a>

```csharp
public string RuleId { get; set; }
```

- *Type:* string

The id of the rule. Must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/magic_network_monitoring_rule#rule_id DataCloudflareMagicNetworkMonitoringRule#rule_id}

---



