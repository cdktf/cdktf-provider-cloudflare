# `dataCloudflareMagicNetworkMonitoringRules` Submodule <a name="`dataCloudflareMagicNetworkMonitoringRules` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicNetworkMonitoringRules <a name="DataCloudflareMagicNetworkMonitoringRules" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/magic_network_monitoring_rules cloudflare_magic_network_monitoring_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicNetworkMonitoringRules(Construct Scope, string Id, DataCloudflareMagicNetworkMonitoringRulesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig">DataCloudflareMagicNetworkMonitoringRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig">DataCloudflareMagicNetworkMonitoringRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicNetworkMonitoringRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicNetworkMonitoringRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicNetworkMonitoringRules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicNetworkMonitoringRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareMagicNetworkMonitoringRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/magic_network_monitoring_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList">DataCloudflareMagicNetworkMonitoringRulesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.result"></a>

```csharp
public DataCloudflareMagicNetworkMonitoringRulesResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList">DataCloudflareMagicNetworkMonitoringRulesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicNetworkMonitoringRulesConfig <a name="DataCloudflareMagicNetworkMonitoringRulesConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicNetworkMonitoringRulesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    double MaxItems = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/magic_network_monitoring_rules#account_id DataCloudflareMagicNetworkMonitoringRules#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/magic_network_monitoring_rules#account_id DataCloudflareMagicNetworkMonitoringRules#account_id}.

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/magic_network_monitoring_rules#max_items DataCloudflareMagicNetworkMonitoringRules#max_items}

---

### DataCloudflareMagicNetworkMonitoringRulesResult <a name="DataCloudflareMagicNetworkMonitoringRulesResult" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicNetworkMonitoringRulesResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicNetworkMonitoringRulesResultList <a name="DataCloudflareMagicNetworkMonitoringRulesResultList" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicNetworkMonitoringRulesResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.get"></a>

```csharp
private DataCloudflareMagicNetworkMonitoringRulesResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareMagicNetworkMonitoringRulesResultOutputReference <a name="DataCloudflareMagicNetworkMonitoringRulesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicNetworkMonitoringRulesResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.automaticAdvertisement">AutomaticAdvertisement</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.bandwidthThreshold">BandwidthThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.packetThreshold">PacketThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.prefixes">Prefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.prefixMatch">PrefixMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.zscoreSensitivity">ZscoreSensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.zscoreTarget">ZscoreTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResult">DataCloudflareMagicNetworkMonitoringRulesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomaticAdvertisement`<sup>Required</sup> <a name="AutomaticAdvertisement" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.automaticAdvertisement"></a>

```csharp
public IResolvable AutomaticAdvertisement { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BandwidthThreshold`<sup>Required</sup> <a name="BandwidthThreshold" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.bandwidthThreshold"></a>

```csharp
public double BandwidthThreshold { get; }
```

- *Type:* double

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PacketThreshold`<sup>Required</sup> <a name="PacketThreshold" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.packetThreshold"></a>

```csharp
public double PacketThreshold { get; }
```

- *Type:* double

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.prefixes"></a>

```csharp
public string[] Prefixes { get; }
```

- *Type:* string[]

---

##### `PrefixMatch`<sup>Required</sup> <a name="PrefixMatch" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.prefixMatch"></a>

```csharp
public string PrefixMatch { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ZscoreSensitivity`<sup>Required</sup> <a name="ZscoreSensitivity" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.zscoreSensitivity"></a>

```csharp
public string ZscoreSensitivity { get; }
```

- *Type:* string

---

##### `ZscoreTarget`<sup>Required</sup> <a name="ZscoreTarget" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.zscoreTarget"></a>

```csharp
public string ZscoreTarget { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMagicNetworkMonitoringRulesResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResult">DataCloudflareMagicNetworkMonitoringRulesResult</a>

---



