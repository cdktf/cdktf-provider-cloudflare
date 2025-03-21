# `dataCloudflareApiShieldDiscoveryOperations` Submodule <a name="`dataCloudflareApiShieldDiscoveryOperations` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareApiShieldDiscoveryOperations <a name="DataCloudflareApiShieldDiscoveryOperations" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_discovery_operations cloudflare_api_shield_discovery_operations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareApiShieldDiscoveryOperations(Construct Scope, string Id, DataCloudflareApiShieldDiscoveryOperationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig">DataCloudflareApiShieldDiscoveryOperationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig">DataCloudflareApiShieldDiscoveryOperationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDiff">ResetDiff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDiff` <a name="ResetDiff" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDiff"></a>

```csharp
private void ResetDiff()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetOrigin` <a name="ResetOrigin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetOrigin"></a>

```csharp
private void ResetOrigin()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareApiShieldDiscoveryOperations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareApiShieldDiscoveryOperations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareApiShieldDiscoveryOperations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareApiShieldDiscoveryOperations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareApiShieldDiscoveryOperations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareApiShieldDiscoveryOperations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareApiShieldDiscoveryOperations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareApiShieldDiscoveryOperations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_discovery_operations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareApiShieldDiscoveryOperations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList">DataCloudflareApiShieldDiscoveryOperationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diffInput">DiffInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.hostInput">HostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.methodInput">MethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.originInput">OriginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diff">Diff</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.host">Host</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.method">Method</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.origin">Origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.result"></a>

```csharp
public DataCloudflareApiShieldDiscoveryOperationsResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList">DataCloudflareApiShieldDiscoveryOperationsResultList</a>

---

##### `DiffInput`<sup>Optional</sup> <a name="DiffInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diffInput"></a>

```csharp
public object DiffInput { get; }
```

- *Type:* object

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.hostInput"></a>

```csharp
public string[] HostInput { get; }
```

- *Type:* string[]

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.methodInput"></a>

```csharp
public string[] MethodInput { get; }
```

- *Type:* string[]

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.originInput"></a>

```csharp
public string OriginInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Diff`<sup>Required</sup> <a name="Diff" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.diff"></a>

```csharp
public object Diff { get; }
```

- *Type:* object

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.host"></a>

```csharp
public string[] Host { get; }
```

- *Type:* string[]

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.method"></a>

```csharp
public string[] Method { get; }
```

- *Type:* string[]

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.origin"></a>

```csharp
public string Origin { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareApiShieldDiscoveryOperationsConfig <a name="DataCloudflareApiShieldDiscoveryOperationsConfig" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareApiShieldDiscoveryOperationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ZoneId,
    object Diff = null,
    string Direction = null,
    string Endpoint = null,
    string[] Host = null,
    double MaxItems = null,
    string[] Method = null,
    string Order = null,
    string Origin = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.diff">Diff</a></code> | <code>object</code> | When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.direction">Direction</a></code> | <code>string</code> | Direction to order results. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.endpoint">Endpoint</a></code> | <code>string</code> | Filter results to only include endpoints containing this pattern. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.host">Host</a></code> | <code>string[]</code> | Filter results to only include the specified hosts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.method">Method</a></code> | <code>string[]</code> | Filter results to only include the specified HTTP methods. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.order">Order</a></code> | <code>string</code> | Field to order by Available values: "host", "method", "endpoint", "traffic_stats.requests", "traffic_stats.last_updated". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.origin">Origin</a></code> | <code>string</code> | Filter results to only include discovery results sourced from a particular discovery engine   * `ML` - Discovered operations that were sourced using ML API Discovery   * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery Available values: "ML", "SessionIdentifier", "LabelDiscovery". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.state">State</a></code> | <code>string</code> | Filter results to only include discovery results in a particular state. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_discovery_operations#zone_id DataCloudflareApiShieldDiscoveryOperations#zone_id}

---

##### `Diff`<sup>Optional</sup> <a name="Diff" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.diff"></a>

```csharp
public object Diff { get; set; }
```

- *Type:* object

When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_discovery_operations#diff DataCloudflareApiShieldDiscoveryOperations#diff}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Direction to order results. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_discovery_operations#direction DataCloudflareApiShieldDiscoveryOperations#direction}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Filter results to only include endpoints containing this pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_discovery_operations#endpoint DataCloudflareApiShieldDiscoveryOperations#endpoint}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.host"></a>

```csharp
public string[] Host { get; set; }
```

- *Type:* string[]

Filter results to only include the specified hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_discovery_operations#host DataCloudflareApiShieldDiscoveryOperations#host}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_discovery_operations#max_items DataCloudflareApiShieldDiscoveryOperations#max_items}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.method"></a>

```csharp
public string[] Method { get; set; }
```

- *Type:* string[]

Filter results to only include the specified HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_discovery_operations#method DataCloudflareApiShieldDiscoveryOperations#method}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to order by Available values: "host", "method", "endpoint", "traffic_stats.requests", "traffic_stats.last_updated".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_discovery_operations#order DataCloudflareApiShieldDiscoveryOperations#order}

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.origin"></a>

```csharp
public string Origin { get; set; }
```

- *Type:* string

Filter results to only include discovery results sourced from a particular discovery engine   * `ML` - Discovered operations that were sourced using ML API Discovery   * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery Available values: "ML", "SessionIdentifier", "LabelDiscovery".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_discovery_operations#origin DataCloudflareApiShieldDiscoveryOperations#origin}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Filter results to only include discovery results in a particular state.

States are as follows

* `review` - Discovered operations that are not saved into API Shield Endpoint Management
* `saved` - Discovered operations that are already saved into API Shield Endpoint Management
* `ignored` - Discovered operations that have been marked as ignored
  Available values: "review", "saved", "ignored".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/api_shield_discovery_operations#state DataCloudflareApiShieldDiscoveryOperations#state}

---

### DataCloudflareApiShieldDiscoveryOperationsResult <a name="DataCloudflareApiShieldDiscoveryOperationsResult" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareApiShieldDiscoveryOperationsResult {

};
```


### DataCloudflareApiShieldDiscoveryOperationsResultFeatures <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeatures" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareApiShieldDiscoveryOperationsResultFeatures {

};
```


### DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.trafficStats">TrafficStats</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures">DataCloudflareApiShieldDiscoveryOperationsResultFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrafficStats`<sup>Required</sup> <a name="TrafficStats" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.trafficStats"></a>

```csharp
public DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference TrafficStats { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareApiShieldDiscoveryOperationsResultFeatures InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeatures">DataCloudflareApiShieldDiscoveryOperationsResultFeatures</a>

---


### DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference <a name="DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.requests">Requests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.lastUpdated"></a>

```csharp
public string LastUpdated { get; }
```

- *Type:* string

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; }
```

- *Type:* double

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.requests"></a>

```csharp
public double Requests { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStatsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesTrafficStats</a>

---


### DataCloudflareApiShieldDiscoveryOperationsResultList <a name="DataCloudflareApiShieldDiscoveryOperationsResultList" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareApiShieldDiscoveryOperationsResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.get"></a>

```csharp
private DataCloudflareApiShieldDiscoveryOperationsResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareApiShieldDiscoveryOperationsResultOutputReference <a name="DataCloudflareApiShieldDiscoveryOperationsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareApiShieldDiscoveryOperationsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.features">Features</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.origin">Origin</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult">DataCloudflareApiShieldDiscoveryOperationsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.features"></a>

```csharp
public DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference Features { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference">DataCloudflareApiShieldDiscoveryOperationsResultFeaturesOutputReference</a>

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.lastUpdated"></a>

```csharp
public string LastUpdated { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.origin"></a>

```csharp
public string[] Origin { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareApiShieldDiscoveryOperationsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldDiscoveryOperations.DataCloudflareApiShieldDiscoveryOperationsResult">DataCloudflareApiShieldDiscoveryOperationsResult</a>

---



