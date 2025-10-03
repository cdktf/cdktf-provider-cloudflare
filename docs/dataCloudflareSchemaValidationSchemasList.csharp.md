# `dataCloudflareSchemaValidationSchemasList` Submodule <a name="`dataCloudflareSchemaValidationSchemasList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSchemaValidationSchemasList <a name="DataCloudflareSchemaValidationSchemasList" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/schema_validation_schemas_list cloudflare_schema_validation_schemas_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareSchemaValidationSchemasList(Construct Scope, string Id, DataCloudflareSchemaValidationSchemasListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig">DataCloudflareSchemaValidationSchemasListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig">DataCloudflareSchemaValidationSchemasListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOmitSource">ResetOmitSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetValidationEnabled">ResetValidationEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetOmitSource` <a name="ResetOmitSource" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOmitSource"></a>

```csharp
private void ResetOmitSource()
```

##### `ResetValidationEnabled` <a name="ResetValidationEnabled" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetValidationEnabled"></a>

```csharp
private void ResetValidationEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareSchemaValidationSchemasList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareSchemaValidationSchemasList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareSchemaValidationSchemasList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareSchemaValidationSchemasList.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareSchemaValidationSchemasList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareSchemaValidationSchemasList resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareSchemaValidationSchemasList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareSchemaValidationSchemasList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/schema_validation_schemas_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareSchemaValidationSchemasList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList">DataCloudflareSchemaValidationSchemasListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSourceInput">OmitSourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabledInput">ValidationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSource">OmitSource</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabled">ValidationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.result"></a>

```csharp
public DataCloudflareSchemaValidationSchemasListResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList">DataCloudflareSchemaValidationSchemasListResultList</a>

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `OmitSourceInput`<sup>Optional</sup> <a name="OmitSourceInput" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSourceInput"></a>

```csharp
public object OmitSourceInput { get; }
```

- *Type:* object

---

##### `ValidationEnabledInput`<sup>Optional</sup> <a name="ValidationEnabledInput" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabledInput"></a>

```csharp
public object ValidationEnabledInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `OmitSource`<sup>Required</sup> <a name="OmitSource" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSource"></a>

```csharp
public object OmitSource { get; }
```

- *Type:* object

---

##### `ValidationEnabled`<sup>Required</sup> <a name="ValidationEnabled" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabled"></a>

```csharp
public object ValidationEnabled { get; }
```

- *Type:* object

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSchemaValidationSchemasListConfig <a name="DataCloudflareSchemaValidationSchemasListConfig" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareSchemaValidationSchemasListConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ZoneId,
    double MaxItems = null,
    object OmitSource = null,
    object ValidationEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.omitSource">OmitSource</a></code> | <code>object</code> | Omit the source-files of schemas and only retrieve their meta-data. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.validationEnabled">ValidationEnabled</a></code> | <code>object</code> | Filter for enabled schemas. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/schema_validation_schemas_list#zone_id DataCloudflareSchemaValidationSchemasList#zone_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/schema_validation_schemas_list#max_items DataCloudflareSchemaValidationSchemasList#max_items}

---

##### `OmitSource`<sup>Optional</sup> <a name="OmitSource" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.omitSource"></a>

```csharp
public object OmitSource { get; set; }
```

- *Type:* object

Omit the source-files of schemas and only retrieve their meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/schema_validation_schemas_list#omit_source DataCloudflareSchemaValidationSchemasList#omit_source}

---

##### `ValidationEnabled`<sup>Optional</sup> <a name="ValidationEnabled" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.validationEnabled"></a>

```csharp
public object ValidationEnabled { get; set; }
```

- *Type:* object

Filter for enabled schemas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/schema_validation_schemas_list#validation_enabled DataCloudflareSchemaValidationSchemasList#validation_enabled}

---

### DataCloudflareSchemaValidationSchemasListResult <a name="DataCloudflareSchemaValidationSchemasListResult" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareSchemaValidationSchemasListResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSchemaValidationSchemasListResultList <a name="DataCloudflareSchemaValidationSchemasListResultList" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareSchemaValidationSchemasListResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.get"></a>

```csharp
private DataCloudflareSchemaValidationSchemasListResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareSchemaValidationSchemasListResultOutputReference <a name="DataCloudflareSchemaValidationSchemasListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareSchemaValidationSchemasListResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.schemaId">SchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.validationEnabled">ValidationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult">DataCloudflareSchemaValidationSchemasListResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.schemaId"></a>

```csharp
public string SchemaId { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `ValidationEnabled`<sup>Required</sup> <a name="ValidationEnabled" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.validationEnabled"></a>

```csharp
public IResolvable ValidationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareSchemaValidationSchemasListResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult">DataCloudflareSchemaValidationSchemasListResult</a>

---



