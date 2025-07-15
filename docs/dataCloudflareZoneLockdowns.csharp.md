# `dataCloudflareZoneLockdowns` Submodule <a name="`dataCloudflareZoneLockdowns` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZoneLockdowns <a name="DataCloudflareZoneLockdowns" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_lockdowns cloudflare_zone_lockdowns}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZoneLockdowns(Construct Scope, string Id, DataCloudflareZoneLockdownsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig">DataCloudflareZoneLockdownsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig">DataCloudflareZoneLockdownsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetCreatedOn">ResetCreatedOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescriptionSearch">ResetDescriptionSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpRangeSearch">ResetIpRangeSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpSearch">ResetIpSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetModifiedOn">ResetModifiedOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetUriSearch">ResetUriSearch</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCreatedOn` <a name="ResetCreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetCreatedOn"></a>

```csharp
private void ResetCreatedOn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDescriptionSearch` <a name="ResetDescriptionSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetDescriptionSearch"></a>

```csharp
private void ResetDescriptionSearch()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetIpRangeSearch` <a name="ResetIpRangeSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpRangeSearch"></a>

```csharp
private void ResetIpRangeSearch()
```

##### `ResetIpSearch` <a name="ResetIpSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetIpSearch"></a>

```csharp
private void ResetIpSearch()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetModifiedOn` <a name="ResetModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetModifiedOn"></a>

```csharp
private void ResetModifiedOn()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetUriSearch` <a name="ResetUriSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.resetUriSearch"></a>

```csharp
private void ResetUriSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZoneLockdowns resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZoneLockdowns.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZoneLockdowns.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZoneLockdowns.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZoneLockdowns.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareZoneLockdowns resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZoneLockdowns to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZoneLockdowns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_lockdowns#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZoneLockdowns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList">DataCloudflareZoneLockdownsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOnInput">CreatedOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearchInput">DescriptionSearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearchInput">IpRangeSearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearchInput">IpSearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOnInput">ModifiedOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearchInput">UriSearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearch">DescriptionSearch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearch">IpRangeSearch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearch">IpSearch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearch">UriSearch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.result"></a>

```csharp
public DataCloudflareZoneLockdownsResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList">DataCloudflareZoneLockdownsResultList</a>

---

##### `CreatedOnInput`<sup>Optional</sup> <a name="CreatedOnInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOnInput"></a>

```csharp
public string CreatedOnInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DescriptionSearchInput`<sup>Optional</sup> <a name="DescriptionSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearchInput"></a>

```csharp
public string DescriptionSearchInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `IpRangeSearchInput`<sup>Optional</sup> <a name="IpRangeSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearchInput"></a>

```csharp
public string IpRangeSearchInput { get; }
```

- *Type:* string

---

##### `IpSearchInput`<sup>Optional</sup> <a name="IpSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearchInput"></a>

```csharp
public string IpSearchInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `ModifiedOnInput`<sup>Optional</sup> <a name="ModifiedOnInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOnInput"></a>

```csharp
public string ModifiedOnInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `UriSearchInput`<sup>Optional</sup> <a name="UriSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearchInput"></a>

```csharp
public string UriSearchInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DescriptionSearch`<sup>Required</sup> <a name="DescriptionSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.descriptionSearch"></a>

```csharp
public string DescriptionSearch { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `IpRangeSearch`<sup>Required</sup> <a name="IpRangeSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipRangeSearch"></a>

```csharp
public string IpRangeSearch { get; }
```

- *Type:* string

---

##### `IpSearch`<sup>Required</sup> <a name="IpSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.ipSearch"></a>

```csharp
public string IpSearch { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `UriSearch`<sup>Required</sup> <a name="UriSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.uriSearch"></a>

```csharp
public string UriSearch { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdowns.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZoneLockdownsConfig <a name="DataCloudflareZoneLockdownsConfig" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZoneLockdownsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ZoneId,
    string CreatedOn = null,
    string Description = null,
    string DescriptionSearch = null,
    string Ip = null,
    string IpRangeSearch = null,
    string IpSearch = null,
    double MaxItems = null,
    string ModifiedOn = null,
    double Priority = null,
    string UriSearch = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.createdOn">CreatedOn</a></code> | <code>string</code> | The timestamp of when the rule was created. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.description">Description</a></code> | <code>string</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.descriptionSearch">DescriptionSearch</a></code> | <code>string</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ip">Ip</a></code> | <code>string</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipRangeSearch">IpRangeSearch</a></code> | <code>string</code> | A single IP address range to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipSearch">IpSearch</a></code> | <code>string</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | The timestamp of when the rule was last modified. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.priority">Priority</a></code> | <code>double</code> | The priority of the rule to control the processing order. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.uriSearch">UriSearch</a></code> | <code>string</code> | A single URI to search for in the list of URLs of existing rules. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_lockdowns#zone_id DataCloudflareZoneLockdowns#zone_id}

---

##### `CreatedOn`<sup>Optional</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.createdOn"></a>

```csharp
public string CreatedOn { get; set; }
```

- *Type:* string

The timestamp of when the rule was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_lockdowns#created_on DataCloudflareZoneLockdowns#created_on}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_lockdowns#description DataCloudflareZoneLockdowns#description}

---

##### `DescriptionSearch`<sup>Optional</sup> <a name="DescriptionSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.descriptionSearch"></a>

```csharp
public string DescriptionSearch { get; set; }
```

- *Type:* string

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_lockdowns#description_search DataCloudflareZoneLockdowns#description_search}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_lockdowns#ip DataCloudflareZoneLockdowns#ip}

---

##### `IpRangeSearch`<sup>Optional</sup> <a name="IpRangeSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipRangeSearch"></a>

```csharp
public string IpRangeSearch { get; set; }
```

- *Type:* string

A single IP address range to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_lockdowns#ip_range_search DataCloudflareZoneLockdowns#ip_range_search}

---

##### `IpSearch`<sup>Optional</sup> <a name="IpSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.ipSearch"></a>

```csharp
public string IpSearch { get; set; }
```

- *Type:* string

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_lockdowns#ip_search DataCloudflareZoneLockdowns#ip_search}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_lockdowns#max_items DataCloudflareZoneLockdowns#max_items}

---

##### `ModifiedOn`<sup>Optional</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; set; }
```

- *Type:* string

The timestamp of when the rule was last modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_lockdowns#modified_on DataCloudflareZoneLockdowns#modified_on}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

The priority of the rule to control the processing order.

A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_lockdowns#priority DataCloudflareZoneLockdowns#priority}

---

##### `UriSearch`<sup>Optional</sup> <a name="UriSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsConfig.property.uriSearch"></a>

```csharp
public string UriSearch { get; set; }
```

- *Type:* string

A single URI to search for in the list of URLs of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_lockdowns#uri_search DataCloudflareZoneLockdowns#uri_search}

---

### DataCloudflareZoneLockdownsResult <a name="DataCloudflareZoneLockdownsResult" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZoneLockdownsResult {

};
```


### DataCloudflareZoneLockdownsResultConfigurations <a name="DataCloudflareZoneLockdownsResultConfigurations" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZoneLockdownsResultConfigurations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZoneLockdownsResultConfigurationsList <a name="DataCloudflareZoneLockdownsResultConfigurationsList" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZoneLockdownsResultConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.get"></a>

```csharp
private DataCloudflareZoneLockdownsResultConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZoneLockdownsResultConfigurationsOutputReference <a name="DataCloudflareZoneLockdownsResultConfigurationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZoneLockdownsResultConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations">DataCloudflareZoneLockdownsResultConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZoneLockdownsResultConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurations">DataCloudflareZoneLockdownsResultConfigurations</a>

---


### DataCloudflareZoneLockdownsResultList <a name="DataCloudflareZoneLockdownsResultList" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZoneLockdownsResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.get"></a>

```csharp
private DataCloudflareZoneLockdownsResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZoneLockdownsResultOutputReference <a name="DataCloudflareZoneLockdownsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZoneLockdownsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.configurations">Configurations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList">DataCloudflareZoneLockdownsResultConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.paused">Paused</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.urls">Urls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult">DataCloudflareZoneLockdownsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.configurations"></a>

```csharp
public DataCloudflareZoneLockdownsResultConfigurationsList Configurations { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultConfigurationsList">DataCloudflareZoneLockdownsResultConfigurationsList</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.paused"></a>

```csharp
public IResolvable Paused { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.urls"></a>

```csharp
public string[] Urls { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZoneLockdownsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdowns.DataCloudflareZoneLockdownsResult">DataCloudflareZoneLockdownsResult</a>

---



