# `dataCloudflareCloudforceOneRequest` Submodule <a name="`dataCloudflareCloudforceOneRequest` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCloudforceOneRequest <a name="DataCloudflareCloudforceOneRequest" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request cloudflare_cloudforce_one_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareCloudforceOneRequest(Construct Scope, string Id, DataCloudflareCloudforceOneRequestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig">DataCloudflareCloudforceOneRequestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig">DataCloudflareCloudforceOneRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.resetRequestId">ResetRequestId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareCloudforceOneRequestFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter">DataCloudflareCloudforceOneRequestFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetRequestId` <a name="ResetRequestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.resetRequestId"></a>

```csharp
private void ResetRequestId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareCloudforceOneRequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareCloudforceOneRequest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareCloudforceOneRequest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareCloudforceOneRequest.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareCloudforceOneRequest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareCloudforceOneRequest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareCloudforceOneRequest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareCloudforceOneRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareCloudforceOneRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.completed">Completed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference">DataCloudflareCloudforceOneRequestFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.messageTokens">MessageTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.readableId">ReadableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.request">Request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.tlp">Tlp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.tokens">Tokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.updated">Updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.requestIdInput">RequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.requestId">RequestId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Completed`<sup>Required</sup> <a name="Completed" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.completed"></a>

```csharp
public string Completed { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.filter"></a>

```csharp
public DataCloudflareCloudforceOneRequestFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference">DataCloudflareCloudforceOneRequestFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MessageTokens`<sup>Required</sup> <a name="MessageTokens" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.messageTokens"></a>

```csharp
public double MessageTokens { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `ReadableId`<sup>Required</sup> <a name="ReadableId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.readableId"></a>

```csharp
public string ReadableId { get; }
```

- *Type:* string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.request"></a>

```csharp
public string Request { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `Tlp`<sup>Required</sup> <a name="Tlp" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.tlp"></a>

```csharp
public string Tlp { get; }
```

- *Type:* string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.tokens"></a>

```csharp
public double Tokens { get; }
```

- *Type:* double

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.updated"></a>

```csharp
public string Updated { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `RequestIdInput`<sup>Optional</sup> <a name="RequestIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.requestIdInput"></a>

```csharp
public string RequestIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `RequestId`<sup>Required</sup> <a name="RequestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.requestId"></a>

```csharp
public string RequestId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCloudforceOneRequestConfig <a name="DataCloudflareCloudforceOneRequestConfig" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareCloudforceOneRequestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    DataCloudflareCloudforceOneRequestFilter Filter = null,
    string RequestId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter">DataCloudflareCloudforceOneRequestFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request#filter DataCloudflareCloudforceOneRequest#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.requestId">RequestId</a></code> | <code>string</code> | UUID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request#account_id DataCloudflareCloudforceOneRequest#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.filter"></a>

```csharp
public DataCloudflareCloudforceOneRequestFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter">DataCloudflareCloudforceOneRequestFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request#filter DataCloudflareCloudforceOneRequest#filter}.

---

##### `RequestId`<sup>Optional</sup> <a name="RequestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestConfig.property.requestId"></a>

```csharp
public string RequestId { get; set; }
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request#request_id DataCloudflareCloudforceOneRequest#request_id}

---

### DataCloudflareCloudforceOneRequestFilter <a name="DataCloudflareCloudforceOneRequestFilter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareCloudforceOneRequestFilter {
    double Page,
    double PerPage,
    string CompletedAfter = null,
    string CompletedBefore = null,
    string CreatedAfter = null,
    string CreatedBefore = null,
    string RequestType = null,
    string SortBy = null,
    string SortOrder = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.page">Page</a></code> | <code>double</code> | Page number of results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.perPage">PerPage</a></code> | <code>double</code> | Number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.completedAfter">CompletedAfter</a></code> | <code>string</code> | Retrieve requests completed after this time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.completedBefore">CompletedBefore</a></code> | <code>string</code> | Retrieve requests completed before this time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.createdAfter">CreatedAfter</a></code> | <code>string</code> | Retrieve requests created after this time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.createdBefore">CreatedBefore</a></code> | <code>string</code> | Retrieve requests created before this time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.requestType">RequestType</a></code> | <code>string</code> | Requested information from request. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.sortBy">SortBy</a></code> | <code>string</code> | Field to sort results by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.sortOrder">SortOrder</a></code> | <code>string</code> | Sort order (asc or desc). Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.status">Status</a></code> | <code>string</code> | Request Status. Available values: "open", "accepted", "reported", "approved", "completed", "declined". |

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.page"></a>

```csharp
public double Page { get; set; }
```

- *Type:* double

Page number of results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request#page DataCloudflareCloudforceOneRequest#page}

---

##### `PerPage`<sup>Required</sup> <a name="PerPage" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.perPage"></a>

```csharp
public double PerPage { get; set; }
```

- *Type:* double

Number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request#per_page DataCloudflareCloudforceOneRequest#per_page}

---

##### `CompletedAfter`<sup>Optional</sup> <a name="CompletedAfter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.completedAfter"></a>

```csharp
public string CompletedAfter { get; set; }
```

- *Type:* string

Retrieve requests completed after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request#completed_after DataCloudflareCloudforceOneRequest#completed_after}

---

##### `CompletedBefore`<sup>Optional</sup> <a name="CompletedBefore" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.completedBefore"></a>

```csharp
public string CompletedBefore { get; set; }
```

- *Type:* string

Retrieve requests completed before this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request#completed_before DataCloudflareCloudforceOneRequest#completed_before}

---

##### `CreatedAfter`<sup>Optional</sup> <a name="CreatedAfter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.createdAfter"></a>

```csharp
public string CreatedAfter { get; set; }
```

- *Type:* string

Retrieve requests created after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request#created_after DataCloudflareCloudforceOneRequest#created_after}

---

##### `CreatedBefore`<sup>Optional</sup> <a name="CreatedBefore" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.createdBefore"></a>

```csharp
public string CreatedBefore { get; set; }
```

- *Type:* string

Retrieve requests created before this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request#created_before DataCloudflareCloudforceOneRequest#created_before}

---

##### `RequestType`<sup>Optional</sup> <a name="RequestType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.requestType"></a>

```csharp
public string RequestType { get; set; }
```

- *Type:* string

Requested information from request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request#request_type DataCloudflareCloudforceOneRequest#request_type}

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.sortBy"></a>

```csharp
public string SortBy { get; set; }
```

- *Type:* string

Field to sort results by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request#sort_by DataCloudflareCloudforceOneRequest#sort_by}

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

Sort order (asc or desc). Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request#sort_order DataCloudflareCloudforceOneRequest#sort_order}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilter.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Request Status. Available values: "open", "accepted", "reported", "approved", "completed", "declined".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/cloudforce_one_request#status DataCloudflareCloudforceOneRequest#status}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareCloudforceOneRequestFilterOutputReference <a name="DataCloudflareCloudforceOneRequestFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareCloudforceOneRequestFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCompletedAfter">ResetCompletedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCompletedBefore">ResetCompletedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCreatedAfter">ResetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCreatedBefore">ResetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetRequestType">ResetRequestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompletedAfter` <a name="ResetCompletedAfter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCompletedAfter"></a>

```csharp
private void ResetCompletedAfter()
```

##### `ResetCompletedBefore` <a name="ResetCompletedBefore" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCompletedBefore"></a>

```csharp
private void ResetCompletedBefore()
```

##### `ResetCreatedAfter` <a name="ResetCreatedAfter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCreatedAfter"></a>

```csharp
private void ResetCreatedAfter()
```

##### `ResetCreatedBefore` <a name="ResetCreatedBefore" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetCreatedBefore"></a>

```csharp
private void ResetCreatedBefore()
```

##### `ResetRequestType` <a name="ResetRequestType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetRequestType"></a>

```csharp
private void ResetRequestType()
```

##### `ResetSortBy` <a name="ResetSortBy" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetSortBy"></a>

```csharp
private void ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedAfterInput">CompletedAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedBeforeInput">CompletedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdAfterInput">CreatedAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdBeforeInput">CreatedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.pageInput">PageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.perPageInput">PerPageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.requestTypeInput">RequestTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortByInput">SortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedAfter">CompletedAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedBefore">CompletedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdAfter">CreatedAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdBefore">CreatedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.page">Page</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.perPage">PerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.requestType">RequestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortBy">SortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompletedAfterInput`<sup>Optional</sup> <a name="CompletedAfterInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedAfterInput"></a>

```csharp
public string CompletedAfterInput { get; }
```

- *Type:* string

---

##### `CompletedBeforeInput`<sup>Optional</sup> <a name="CompletedBeforeInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedBeforeInput"></a>

```csharp
public string CompletedBeforeInput { get; }
```

- *Type:* string

---

##### `CreatedAfterInput`<sup>Optional</sup> <a name="CreatedAfterInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdAfterInput"></a>

```csharp
public string CreatedAfterInput { get; }
```

- *Type:* string

---

##### `CreatedBeforeInput`<sup>Optional</sup> <a name="CreatedBeforeInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdBeforeInput"></a>

```csharp
public string CreatedBeforeInput { get; }
```

- *Type:* string

---

##### `PageInput`<sup>Optional</sup> <a name="PageInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.pageInput"></a>

```csharp
public double PageInput { get; }
```

- *Type:* double

---

##### `PerPageInput`<sup>Optional</sup> <a name="PerPageInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.perPageInput"></a>

```csharp
public double PerPageInput { get; }
```

- *Type:* double

---

##### `RequestTypeInput`<sup>Optional</sup> <a name="RequestTypeInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.requestTypeInput"></a>

```csharp
public string RequestTypeInput { get; }
```

- *Type:* string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortByInput"></a>

```csharp
public string SortByInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `CompletedAfter`<sup>Required</sup> <a name="CompletedAfter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedAfter"></a>

```csharp
public string CompletedAfter { get; }
```

- *Type:* string

---

##### `CompletedBefore`<sup>Required</sup> <a name="CompletedBefore" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.completedBefore"></a>

```csharp
public string CompletedBefore { get; }
```

- *Type:* string

---

##### `CreatedAfter`<sup>Required</sup> <a name="CreatedAfter" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdAfter"></a>

```csharp
public string CreatedAfter { get; }
```

- *Type:* string

---

##### `CreatedBefore`<sup>Required</sup> <a name="CreatedBefore" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.createdBefore"></a>

```csharp
public string CreatedBefore { get; }
```

- *Type:* string

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.page"></a>

```csharp
public double Page { get; }
```

- *Type:* double

---

##### `PerPage`<sup>Required</sup> <a name="PerPage" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.perPage"></a>

```csharp
public double PerPage { get; }
```

- *Type:* double

---

##### `RequestType`<sup>Required</sup> <a name="RequestType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.requestType"></a>

```csharp
public string RequestType { get; }
```

- *Type:* string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortBy"></a>

```csharp
public string SortBy { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequest.DataCloudflareCloudforceOneRequestFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



