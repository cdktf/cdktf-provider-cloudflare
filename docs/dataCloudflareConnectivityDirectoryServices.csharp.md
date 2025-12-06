# `dataCloudflareConnectivityDirectoryServices` Submodule <a name="`dataCloudflareConnectivityDirectoryServices` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareConnectivityDirectoryServices <a name="DataCloudflareConnectivityDirectoryServices" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_services cloudflare_connectivity_directory_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareConnectivityDirectoryServices(Construct Scope, string Id, DataCloudflareConnectivityDirectoryServicesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig">DataCloudflareConnectivityDirectoryServicesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig">DataCloudflareConnectivityDirectoryServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryServices resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareConnectivityDirectoryServices.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareConnectivityDirectoryServices.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareConnectivityDirectoryServices.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareConnectivityDirectoryServices.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryServices resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareConnectivityDirectoryServices to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareConnectivityDirectoryServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_services#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareConnectivityDirectoryServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList">DataCloudflareConnectivityDirectoryServicesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.result"></a>

```csharp
public DataCloudflareConnectivityDirectoryServicesResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList">DataCloudflareConnectivityDirectoryServicesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServices.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareConnectivityDirectoryServicesConfig <a name="DataCloudflareConnectivityDirectoryServicesConfig" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareConnectivityDirectoryServicesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    double MaxItems = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.accountId">AccountId</a></code> | <code>string</code> | Account identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.type">Type</a></code> | <code>string</code> | Available values: "http". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_services#account_id DataCloudflareConnectivityDirectoryServices#account_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_services#max_items DataCloudflareConnectivityDirectoryServices#max_items}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Available values: "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/connectivity_directory_services#type DataCloudflareConnectivityDirectoryServices#type}

---

### DataCloudflareConnectivityDirectoryServicesResult <a name="DataCloudflareConnectivityDirectoryServicesResult" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareConnectivityDirectoryServicesResult {

};
```


### DataCloudflareConnectivityDirectoryServicesResultHost <a name="DataCloudflareConnectivityDirectoryServicesResultHost" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareConnectivityDirectoryServicesResultHost {

};
```


### DataCloudflareConnectivityDirectoryServicesResultHostNetwork <a name="DataCloudflareConnectivityDirectoryServicesResultHostNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareConnectivityDirectoryServicesResultHostNetwork {

};
```


### DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork <a name="DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference <a name="DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetwork">DataCloudflareConnectivityDirectoryServicesResultHostNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareConnectivityDirectoryServicesResultHostNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetwork">DataCloudflareConnectivityDirectoryServicesResultHostNetwork</a>

---


### DataCloudflareConnectivityDirectoryServicesResultHostOutputReference <a name="DataCloudflareConnectivityDirectoryServicesResultHostOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareConnectivityDirectoryServicesResultHostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.ipv4">Ipv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.ipv6">Ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.network">Network</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.resolverNetwork">ResolverNetwork</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHost">DataCloudflareConnectivityDirectoryServicesResultHost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.ipv4"></a>

```csharp
public string Ipv4 { get; }
```

- *Type:* string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.ipv6"></a>

```csharp
public string Ipv6 { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.network"></a>

```csharp
public DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference</a>

---

##### `ResolverNetwork`<sup>Required</sup> <a name="ResolverNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.resolverNetwork"></a>

```csharp
public DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference ResolverNetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareConnectivityDirectoryServicesResultHost InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHost">DataCloudflareConnectivityDirectoryServicesResultHost</a>

---


### DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference <a name="DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.resolverIps">ResolverIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork">DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResolverIps`<sup>Required</sup> <a name="ResolverIps" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.resolverIps"></a>

```csharp
public string[] ResolverIps { get; }
```

- *Type:* string[]

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork">DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork</a>

---


### DataCloudflareConnectivityDirectoryServicesResultList <a name="DataCloudflareConnectivityDirectoryServicesResultList" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareConnectivityDirectoryServicesResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.get"></a>

```csharp
private DataCloudflareConnectivityDirectoryServicesResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareConnectivityDirectoryServicesResultOutputReference <a name="DataCloudflareConnectivityDirectoryServicesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareConnectivityDirectoryServicesResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.host">Host</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.httpPort">HttpPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.httpsPort">HttpsPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResult">DataCloudflareConnectivityDirectoryServicesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.host"></a>

```csharp
public DataCloudflareConnectivityDirectoryServicesResultHostOutputReference Host { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultHostOutputReference">DataCloudflareConnectivityDirectoryServicesResultHostOutputReference</a>

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.httpPort"></a>

```csharp
public double HttpPort { get; }
```

- *Type:* double

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.httpsPort"></a>

```csharp
public double HttpsPort { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareConnectivityDirectoryServicesResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryServices.DataCloudflareConnectivityDirectoryServicesResult">DataCloudflareConnectivityDirectoryServicesResult</a>

---



